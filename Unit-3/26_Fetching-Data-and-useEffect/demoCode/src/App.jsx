import { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [pokeList, setPokeList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon");
        const data = await response.json();
        setPokeList(data.results);
      } catch (error) {
        setError(error);
      }
    }
    fetchPokemon();
  }, []);

  return (
    <>
      {!error &&
        pokeList.map((pokemon) => {
          return <p key={pokemon.name}>{pokemon.name}</p>;
        })}
    </>
  );
}

export default App;
