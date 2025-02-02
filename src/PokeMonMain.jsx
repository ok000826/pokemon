import React, { useState, useEffect } from "react";
import axios from "axios";
const PokeMonMain = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [result, setResult] = useState(0);
  const [pokeData, setPokeData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");

  // Call Pokemon API when page is load
  useEffect(() => {
    const url = "https://pokeapi.co/api/v2/pokemon/";
    axios
      .get(url)
      .then((data) => {
        console.log("data = ", data.data);
        setPokeData(data.data.results);
        setNextUrl(data.data.next);
      })
      .catch((error) => {
        console.log("error happened. error = ", error);
      });
  }, []);
  const handleNumber1 = (ev) => {
    const value = ev.target.value;
    console.log("number1 = ", value);
    setNumber1(value);
  };
  const handleNumber2 = (ev) => {
    const value = ev.target.value;
    console.log("number2 = ", value);
    setNumber2(value);
  };
  const handleClick = () => {
    const resultValue = Number(number1) + Number(number2);
    setResult(resultValue);
  };

  const handleNextData = () => {
    axios.get(nextUrl).then((data) => {
      console.log("data = ", data.data);
      setPokeData(data.data.results);
      setNextUrl(data.data.next);
    });
  };

  return (
    <>
      <div>
        <h1>The result is {result}!</h1>
      </div>
      <div className='numberBox'>
        <span>Number1</span>
        <input type='text' onChange={handleNumber1}></input>
      </div>
      <div className='numberBox'>
        <span>Number2</span>
        <input type='text' onChange={handleNumber2}></input>
      </div>
      <div>
        <button onClick={handleClick}>calculate</button>
      </div>

      <div>
        {pokeData.map((eachPokemon) => {
          return (
            <div>
              name: {eachPokemon.name} url:{eachPokemon.url}{" "}
            </div>
          );
        })}
      </div>

      <button onClick={handleNextData}>Next</button>
    </>
  );
};

export default PokeMonMain;
