import { useState } from 'react';

import Container from '../../components/Container/Container';

const CounterPage = () => {
  const [count, setCount] = useState(1);

  const plusOneHandler = () => { 
    let newTitle = count + 1;
    setCount(newTitle);
  }

  return (
    <Container>
      <h1>{count}</h1>
      <button onClick={plusOneHandler} disabled={count > 9 ? true : null}>+1</button>
    </Container>
  )
}

export default CounterPage;