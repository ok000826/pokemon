import React, { useState, useEffect } from "react";
import axios from "axios";

import Info from '../Info';
import Title from '../Title';
import Details from '../Details';

const PokeMonMain = () => {
  const [isInfo, setIsInfo] = useState(true);
  const [selectedPokemon, setSelectedPokemon] = useState(null);
  const handleModeChange= (mode, selectedPokemon) => {
    setIsInfo(mode);
    setSelectedPokemon(selectedPokemon);
  }
  return <>
    <Title title='Pokemon' age='24'/>
    { isInfo ? <Info onModeChange={handleModeChange} /> : <Details selectedPokemon={selectedPokemon}  onModeChange={handleModeChange}/> }
  </>
};

export default PokeMonMain;
