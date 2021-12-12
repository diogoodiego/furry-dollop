import React, { useContext } from "react";
import PokemonContext from "../../contexts/pokemonContext";
import { Navbar } from "../../components";
import './style.css';

function SinglePokemon() {
    const { viewPokemon } = useContext(PokemonContext);
    console.log(viewPokemon.abilities)
    return (
        <>
            {viewPokemon.id > 0 ?
                <div id="single-pokemon" style={{ backgroundColor: `var(--${viewPokemon.types[0].type.name})` }} >
                    <Navbar />
                        <h1>{viewPokemon.name}</h1>
                        <h2>#{viewPokemon.id}</h2>
                        <div className="types">
                            {viewPokemon.types.map(type => <div className="type">{type.type.name}</div>)}
                        </div>
                    <img src={viewPokemon.sprites.front_default} alt="" />
                    <div className="details">
                        
                        <p className="atribute">abilities</p>
                        <p className="value">{viewPokemon.abilities.map(ability => ability.ability.name)}</p>


                        <p className="atribute">height</p>
                        <p className="value">{viewPokemon.height}</p>

                        <p className="atribute">width</p>
                        <p className="value">{viewPokemon.weight}</p>

                        <p>Stats</p>
                        <p>Stats</p>

                        {viewPokemon.stats.map(stat => <p>{stat.stat.name} - {stat.base_stat}</p>)}


                    </div>
                </div>
                : null}
        </>
    )
}

export default SinglePokemon;