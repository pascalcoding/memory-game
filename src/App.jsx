import { useState } from 'react';
import Grid from './components/grid';
import Counter from './components/counter';

function App() {
  const [count, setCount] = useState(0);
  const [maxCount, setMaxCount] = useState(0);

  const incrementCount = () => {
    if (count + 1 > maxCount) {
      setMaxCount((count) => count + 1);
    }
    setCount((count) => count + 1);
  };

  const resetCount = () => {
    setCount(() => 0);
  };

  return (
    <>
      <Counter count={count} maxCount={maxCount} />
      <Grid incrementCount={incrementCount} resetCount={resetCount} />
    </>
  );
}

export default App;
