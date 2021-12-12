import React,{useEffect,useState} from 'react';
import axios from 'axios';
import PokemonContext from './contexts/pokemonContext';
import {Navbar,PokemonList,SinglePokemon} from './components';
import './global.css';

function App(){
  const [Pokemons, setPokemons] = useState([]);
  const [viewPokemon, setViewPokemon] = useState([]);

  useEffect(()=>{
    for (let i = 1; i < 151; i++) {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => { 
        setPokemons(prev => [...prev, res.data]);
      });
    }
  },[]);

  return(
    <PokemonContext.Provider value={{Pokemons, setPokemons , viewPokemon, setViewPokemon}}>
      <div id="App">
        <Navbar/>
        <SinglePokemon />
        <PokemonList />
      </div>
    </PokemonContext.Provider>
  )
}

export default App;


// import React, { useEffect, useState, useContext } from "react"
// import axios from 'axios';
// import './app.css';
// import pokeball from "./images/pokeball-red.svg";


// function App() {

//   const [Pokemons, setPokemons] = useState([]);
//   const [siglePokemon, setSiglePokemon] = useState([]);
//   const [Parameters, setParameters] = useState();

//   useEffect(() => {
//     if (Object.keys(Pokemons).length < 150) {
//       for (let i = 1; i < 151; i++) {
//         axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(response => {
//           setPokemons(prev => [...prev, response.data]);
//         });
//       }
//     }
//   }, []);

//   return (
//     <SearchPokemons.Provider value={{Parameters, setParameters, siglePokemon, setSiglePokemon}}>
//       <div className="App">
//         {Object.keys(siglePokemon).length > 0? <SinglePokemon /> : <LandingArea />}
//         <div className="list">
//           {Object.keys(Pokemons).length > 120 ? <PokemonList data={Pokemons} /> :
//             <div className="loading"><img src={pokeball} alt="" /> <h1>Carregando pokemons</h1></div>}
//         </div>
//       </div>
//     </SearchPokemons.Provider>
//   );
// }


// function SinglePokemon(){
//   const {siglePokemon} = useContext(SearchPokemons);
//   console.log(siglePokemon);
//   return(
//     <div id="single-pokemon">
//       <h1>Name: {siglePokemon.name}</h1>
//       <h1>height: {siglePokemon.height}</h1>
//       <h1>weight: {siglePokemon.weight}</h1>
//     </div>
//   )
// }

// function LandingArea() {
//   const {Parameters,setParameters} = useContext(SearchPokemons);

//   return (
//     <div id="landing">
//       <main>
//         <h1>What Pokémon are you looking for?</h1>
//         <input type="text" placeholder="Search for Pokemon or Pokemon id" name="" id="" value={Parameters} onChange={e => setParameters(e.target.value)} />
//       </main>
//     </div>
//   )
// }

// function PokemonList(props) {
//   const {Parameters} = useContext(SearchPokemons);
  
//   props.data.sort((a, b) => {
//     if (a.id > b.id) { return 1 };
//     if (a.id < b.id) { return -1 };
//     return 0;
//   });

//   return (
//     <>
//       {props.data.filter(pokemon =>
//         pokemon.name.includes(Parameters !== undefined ?  Parameters.toLowerCase() :'' ) || pokemon.id === (Parameters !== undefined? parseInt(Parameters) : null ) 
//       ).map(pokemon => <PokemonCard key={props.data.id} data={pokemon} />)}
//     </>
//   )
// }
// function PokemonCard(props) {
//   const {setSiglePokemon} = useContext(SearchPokemons);


//   return (
//     <div className="pokemon-card" onClick={() => (setSiglePokemon(props.data))} style={{ backgroundColor: `var(--${props.data.types[0].type.name})` }}>
//       {/* <img className="pokeball" src={pokeball} alt="" /> */}
//       <h4>{props.data.name}</h4>
//       <h5>#{props.data.id}</h5>
//       <div className="type"><p>{props.data.types[0].type.name}</p></div>
//       <img src={props.data.sprites.front_default} alt="" />
//     </div>
//   )
// }


// const SearchPokemons = React.createContext();


// export default App;
