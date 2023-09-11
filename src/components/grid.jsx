import { v4 as uuid } from 'uuid';
import { useEffect, useState } from 'react';
import Card from './card';
import './grid.css';

const pokemons = [
  'bulbasaur',
  'charmander',
  'squirtle',
  'caterpie',
  'pidgeotto',
  'pidgeot',
  'pikachu',
  'hypno',
  'eevee',
  'meowth',
];

function Grid() {
  const [pokemonData, setPokemonData] = useState([]);

  useEffect(() => {
    async function fetchPokemonData() {
      const newData = [];
      for (let i = 0; i < pokemons.length; i++) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemons[i]}`
        );
        const data = await response.json();
        newData.push({
          pokemonName: pokemons[i],
          img: data.sprites.front_default,
        });
      }
      setPokemonData(newData);
    }
    fetchPokemonData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="row">
        {pokemonData.slice(0, 5).map((data) => {
          return (
            <Card key={uuid()} pokemonName={data.pokemonName} img={data.img} />
          );
        })}
      </div>
      <div className="row">
        {pokemonData.slice(5, 10).map((data) => {
          return (
            <Card key={uuid()} pokemonName={data.pokemonName} img={data.img} />
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
