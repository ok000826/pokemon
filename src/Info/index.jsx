import React, { useState, useEffect } from "react";
import axios from "axios";

const Info = ({onModeChange}) => {
  const [pokeData, setPokeData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  const handleNextData = () => {
    axios.get(nextUrl).then((data) => {
      console.log("data = ", data.data);
      setPokeData(data.data.results);
      setNextUrl(data.data.next);
    });
  };
  // Call Pokemon API when page is load first time
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    axios
      .get(url)
      .then((data) => {
        console.log("data = ", data.data);
        setPokeData(data.data.results);
      })
      .catch((error) => {
        console.log("error happened. error = ", error);
      });
  }, []);

  return <div>
    {pokeData.map((eachPokemon, index) => {
      return (
        <div>
        <span>
          name: {eachPokemon.name} url:{eachPokemon.url}{" "}
        </span>
        
        <button onClick={
          () => {
            onModeChange(false, index + 1);
          }
        }> Details </button>
        </div>
      );
    })}
        <button onClick={handleNextData}>Next</button>
  </div>
};

export default Info;