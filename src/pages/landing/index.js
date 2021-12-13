import React, {useContext} from 'react';
import { Navbar, PokemonList } from '../../components';
import { FiSearch } from "react-icons/fi";
import PokemonContext from "../../contexts/pokemonContext";
import "./style.css";


function Landing() {
    const {Parameters,setParameters} = useContext(PokemonContext);
    return (
        <>
            <div id="landing">
                <Navbar backgroundColor={'transparent'}></Navbar>
                <div className="container">
                    <h1>What Pokémon <br /> are you looking for?</h1>
                    <div className="search-box">
                        <FiSearch />
                        <input type="text" name="" value={Parameters} id="" placeholder='Search Pokémon, ID, Move, Ability, etc...' onChange={(e) => setParameters(e.target.value)} />
                    </div>
                </div>
            </div>
            <PokemonList />
        </>
    )
}

export default Landing;