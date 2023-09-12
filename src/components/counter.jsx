import './counter.css';

function Counter({ count, maxCount }) {
  return (
    <div className="counter">
      <div>Current Score: {count}</div>
      <div>High Score: {maxCount}</div>
    </div>
  );
}

export default Counter;
