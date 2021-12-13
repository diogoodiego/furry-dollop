import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PokemonContext from './contexts/pokemonContext';
import {Landing, SinglePokemon} from './pages'; 

import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";

import './global.css';

function App() {
    const [Pokemons, setPokemons] = useState([]);
    const [viewPokemon, setViewPokemon] = useState([]);
    const [Parameters, setParameters] = useState();

    useEffect(() => {
        for (let i = 1; i <= 151; i++) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => {
                setPokemons(prev => [...prev, res.data]);
            });
        }
    }, []);

    return (
        <Router>
            <PokemonContext.Provider value={{ Pokemons, setPokemons, viewPokemon, setViewPokemon, Parameters, setParameters }}>
                <div id="App">
                    <Routes>
                        <Route exact path="/" element={<Landing />} />
                        <Route path="/pokemon" element={<SinglePokemon />} />
                    </Routes>
                </div>
            </PokemonContext.Provider>
        </Router>
    )
}

export default App;