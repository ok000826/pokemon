import React from "react";

const Details = ({selectedPokemon, onModeChange}) => {
    // fetch data for selectedPokemon
    // and show its data
    const handleClick = () => {
        onModeChange(true, selectedPokemon)
    }
    return <div> 
        Current pokemon is {selectedPokemon}
        <button onClick={handleClick}>Back</button>
    </div>
}

export default Details;