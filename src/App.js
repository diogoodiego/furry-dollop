import { useEffect, useState } from "react"
import axios from 'axios';
import './app.css';


function App() {

  const [Pokemons, setPokemons] = useState([]);
  const [Current, setCurrent] = useState({});

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=151`).then(response => {
      setPokemons(response.data.results);
    });
  }, []);


  function handleCurrent(e) {
    if (Current.name !== e.name) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${e.name}`).then(res => {
        console.log(res.data);
        setCurrent(res.data)
      })
    }
  }

  return (
    <div className="App">

      <div className="pokemon">
        {Object.entries(Current).length > 0 ?
          <div className="current">
            <img src={Current.sprites.front_default} alt="" />
          </div>
          : "Selecione um pokemon"}

      </div>

      <div className="list">
        {Pokemons.length > 0 ? Pokemons.map((pokemon, index) => {
          return (
            <div className="card" key={index} onClick={() => { handleCurrent(pokemon) }}>
              <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} alt="" />
              <h3>{index}</h3>
              <h4>{pokemon.name}</h4>
            </div>
          )
        }) : <h1>Pokedex vazia :(</h1>}
      </div>
    </div>
  );
}


export default App;
