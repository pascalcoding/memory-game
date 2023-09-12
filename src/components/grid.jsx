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

function Grid({ incrementCount, resetCount }) {
  const [pokemonData, setPokemonData] = useState([]);
  const [cardStates, setCardStates] = useState([]);

  const setIsClicked = (id, isClicked) => {
    const newCards = cardStates.map((card) => {
      if (id === card.id) {
        return { id: card.id, isClicked: isClicked };
      } else {
        return card;
      }
    });
    setCardStates(newCards);
  };

  const resetCardStates = () => {
    const newCards = cardStates.map((card) => {
      return { id: card.id, isClicked: false };
    });
    setCardStates(newCards);
  };

  const getIsClicked = (id) => {
    for (let i = 0; i < cardStates.length; i++) {
      if (cardStates[i].id === id) {
        return cardStates[i].isClicked;
      }
    }
  };

  const shuffleCards = () => {
    const newPokemonData = [...pokemonData];
    for (let i = newPokemonData.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newPokemonData[i], newPokemonData[j]] = [
        newPokemonData[j],
        newPokemonData[i],
      ];
    }
    setPokemonData(newPokemonData);
  };

  useEffect(() => {
    async function fetchPokemonData() {
      const newData = [];
      for (let i = 0; i < pokemons.length; i++) {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemons[i]}`
        );
        const data = await response.json();
        newData.push({
          id: uuid(),
          pokemonName: pokemons[i],
          img: data.sprites.front_default,
        });
      }
      setPokemonData(newData);
      setCardStates(newData.map((card) => ({ id: card.id, isClicked: false })));
    }
    fetchPokemonData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div className="row">
        {pokemonData.slice(0, 5).map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              pokemonName={data.pokemonName}
              img={data.img}
              shuffleCards={shuffleCards}
              incrementCount={incrementCount}
              resetCount={resetCount}
              setIsClicked={setIsClicked}
              resetCardStates={resetCardStates}
              getIsClicked={getIsClicked}
            />
          );
        })}
      </div>
      <div className="row">
        {pokemonData.slice(5, 10).map((data) => {
          return (
            <Card
              key={data.id}
              id={data.id}
              pokemonName={data.pokemonName}
              img={data.img}
              shuffleCards={shuffleCards}
              incrementCount={incrementCount}
              resetCount={resetCount}
              setIsClicked={setIsClicked}
              resetCardStates={resetCardStates}
              getIsClicked={getIsClicked}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Grid;
