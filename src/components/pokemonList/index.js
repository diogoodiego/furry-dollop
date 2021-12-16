import React, { useContext, useState, useEffect} from "react";
import PokemonContext from "../../contexts/pokemonContext";
import { Link } from "react-router-dom";
import './style.css';

function PokemonList() {
    const { Pokemons, Parameters } = useContext(PokemonContext);
    Pokemons.sort((a, b) => {
        if (a.id > b.id) { return 1 };
        if (a.id < b.id) { return -1 };
        return 0;
    });

    return (
        <div id="pokemon-list">
            <div className="container">
                {Object.keys(Pokemons).length > 140 ? Pokemons.filter(filter =>  filter.name.includes(Parameters !== undefined ? Parameters.toLowerCase(): '' ) || String(filter.id).includes(Parameters !== undefined ? Parameters.toLowerCase(): '' ) ).map(pokemon => <PokemonCard key={pokemon.name + pokemon.id} data={pokemon} />) : "Carregando Pokemons"}
            </div>
        </div>
    )
}

function PokemonCard(props) {
    const {setViewPokemon} = useContext(PokemonContext);
  
    return (
        <Link to="/pokemon" className="card" onClick={() => setViewPokemon(props.data)} style={{backgroundColor:`var(--${props.data.types[0].type.name})`}}>
            <h5>{props.data.name}</h5>
            <h4>#{props.data.id}</h4>
            <div className="type">
                <small>{props.data.types[0].type.name}</small>
            </div>
            <img src={props.data.sprites.front_default} alt="" />

        </Link>
    )
}

export default PokemonList;