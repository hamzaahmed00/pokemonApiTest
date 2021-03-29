import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import MyCard from "./MyCard";

function App() {
  const [pokemons, setPokemons] = useState(null);
  const fetchPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=10")
      .then(function (response) {
        // handle success
        console.log(response.data);
        setPokemons(response.data.results);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <div className="App">
      {pokemons &&
        pokemons.map((pokemon) => {
          return <MyCard name={pokemon.name} url={pokemon.url} />;
        })}
    </div>
  );
}

export default App;
