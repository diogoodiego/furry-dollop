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
                <div id="single-pokemon" >
                    <Navbar backgroundColor={`var(--${viewPokemon.types[0].type.name})`} />

                    <main style={{ backgroundColor: `var(--${viewPokemon.types[0].type.name})` }}>
                        <div className="container">
                            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${viewPokemon.id}.svg`} alt={viewPokemon.name} />
                            <div className="info">
                                <h2>#{viewPokemon.id}</h2>
                                <h1>{viewPokemon.name}</h1>
                                <div className="types">
                                    {viewPokemon.types.map(type => <div className="type">{type.type.name}</div>)}
                                </div>
                            </div>
                        </div>
                    </main>


                </div>

                // <div id="single-pokemon" style={{ backgroundColor: `var(--${viewPokemon.types[0].type.name})` }} >
                //     <Navbar />

                //     <h1>{viewPokemon.name}</h1>
                //     <h2>#{viewPokemon.id}</h2>
                //     <div className="types">
                //         {viewPokemon.types.map(type => <div className="type">{type.type.name}</div>)}
                //     </div>
                //     <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${viewPokemon.id}.svg`} alt="" />
                //     <div className="details">

                //         <p className="atribute">abilities</p>
                //         <p className="value">{viewPokemon.abilities.map(ability => ability.ability.name)}</p>


                //         <p className="atribute">height</p>
                //         <p className="value">{viewPokemon.height}</p>

                //         <p className="atribute">width</p>
                //         <p className="value">{viewPokemon.weight}</p>

                //         <p>Stats</p>
                //         <p>Stats</p>
                //         <div className="stats">

                //             {viewPokemon.stats.map(stat => <><p>{stat.stat.name}</p> <p>{stat.base_stat}</p></>)}
                //         </div>



                //     </div>
                // </div>
                : null}
        </>
    )
}

export default SinglePokemon;