import { useState } from 'react';

import Container from '../../components/Container/Container';

const CounterPage = () => {
  const initialCount = 5;
  const [count, setCount] = useState(initialCount);

  const counterHandler = num => setCount(count + num);
  const counterInputHandler = event => setCount(Number(event.target.value));

  let classes = count > 4 ? 'color-green' : 'color-red';

  return (
    <Container>
      <h1 className={classes}>{count}</h1>
      <input type="number" min="1" max="10" value={count} onChange={counterInputHandler} />
      <button onClick={() => counterHandler(2)} disabled={count > 8}>+2</button>
      <button onClick={() => counterHandler(1)} disabled={count > 9}>+1</button>
      <button onClick={() => counterHandler(-1)} disabled={count < 2}>-1</button>
      <button onClick={() => counterHandler(-2)} disabled={count < 3}>-2</button>
      <button onClick={() => setCount(initialCount)}>Reset</button>
    </Container>
  )
}

export default CounterPage;