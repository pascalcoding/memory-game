import './card.css';

function Card({
  id,
  pokemonName,
  img,
  shuffleCards,
  incrementCount,
  resetCount,
  setIsClicked,
  resetCardStates,
  getIsClicked,
}) {
  const handleClick = () => {
    if (getIsClicked(id)) {
      resetCount();
      resetCardStates();
    } else {
      incrementCount();
      setIsClicked(id, true);
    }
    shuffleCards();
  };

  return (
    <div className="card" onClick={handleClick}>
      <img src={img} alt={pokemonName} />
      <p>{pokemonName[0].toUpperCase() + pokemonName.slice(1)}</p>
    </div>
  );
}

export default Card;
