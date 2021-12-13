import React, { useContext } from "react";
import PokemonContext from "../../contexts/pokemonContext";
import './style.css';

function Navbar(props) {
    const {setViewPokemon} = useContext(PokemonContext);
    return (
        <div id="navbar" style={{backgroundColor:`${props.backgroundColor !== undefined ? props.backgroundColor : 'var(--fighting)' }`}} >
            <div className="container">
                <p onClick={() => setViewPokemon({id:0})}>Furry Dollop</p>
            </div>
        </div>
    )
}
export default Navbar;