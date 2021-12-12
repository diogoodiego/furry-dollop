import React, { useContext } from "react";
import PokemonContext from "../../contexts/pokemonContext";
import './style.css';

function PokemonList() {
    const { Pokemons } = useContext(PokemonContext);
    Pokemons.sort((a, b) => {
        if (a.id > b.id) { return 1 };
        if (a.id < b.id) { return -1 };
        return 0;
    });

    console.log(Pokemons);
    return (
        <div id="pokemon-list">
            <div className="container">
                {Object.keys(Pokemons).length > 140 ? Pokemons.map(pokemon => <PokemonCard data={pokemon} />) : "Carregando Pokemons"}
            </div>
        </div>
    )
}

function PokemonCard(props) {
    console.log(props.data);
    return (
        <div className="card" style={{backgroundColor:`var(--${props.data.types[0].type.name})`}}>
            <h4>{props.data.name}</h4>
            <h5>{props.data.id}</h5>
            <small>{props.data.types[0].type.name}</small>
            <img src={props.data.sprites.front_default} alt="" />

        </div>
    )
}

export default PokemonList;