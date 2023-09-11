import { useState } from 'react';
import './card.css';

function Card({ pokemonName, img }) {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={img} alt={pokemonName} />
      <p>
        {pokemonName[0].toUpperCase() +
          pokemonName.slice(1, pokemonName.length)}
      </p>
    </div>
  );
}

export default Card;
