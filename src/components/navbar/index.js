import React, { useContext } from "react";
import PokemonContext from "../../contexts/pokemonContext";
import './style.css';

function Navbar() {
    const {setViewPokemon} = useContext(PokemonContext);
    return (
        <div id="navbar">
            <div className="container">
                <p onClick={() => setViewPokemon({id:0})}>Furry Dollop</p>
            </div>
        </div>
    )
}
export default Navbar;