import { useEffect, useState } from "react"
import axios from 'axios';
import './app.css';
import pokeball from "./images/pokeball-red.svg";


function App() {

  const [Pokemons, setPokemons] = useState([]);
  const [Current, setCurrent] = useState([]);

  useEffect(() => {
    if(Object.keys(Pokemons).length < 151){
      for (let i = 1; i < 151; i++) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => {
          setPokemons(prev => [...prev, response.data]);
        });
      }
    }
  }, []);


  return (
    <div className="App">
      <h1>Pokedex</h1>
      <div className="list">
        {Object.keys(Pokemons).length > 145 ? <PokemonList data={Pokemons} /> : 
        <div className="loading"><img src={pokeball} alt="" /> <h1>Carregando pokemons</h1></div> }
      </div>

    </div>
  );
}

function PokemonList(props) {
  props.data.sort((a, b) => {
    if(a.id > b.id){return 1};
    if(a.id < b.id){return -1};
    return 0;
  });
  return (
    <>
      {props.data.map(pokemon => <PokemonCard key={props.data.id} data={pokemon} />)}
    </>
  )
}
function PokemonCard(props) {
  return (
    <div className="pokemon-card" style={{backgroundColor:`var(--${props.data.types[0].type.name})`}}>
      {/* <img className="pokeball" src={pokeball} alt="" /> */}
      <h4>{props.data.name}</h4>
      <h5>{props.data.id}</h5>
      <div className="type"><p>{props.data.types[0].type.name}</p></div>
      <img src={props.data.sprites.front_default} alt="" />
    </div>
  )
}



export default App;
