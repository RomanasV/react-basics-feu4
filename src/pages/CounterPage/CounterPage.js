import { useState } from 'react';

import Container from '../../components/Container/Container';

const CounterPage = () => {
  const initialCount = 5;
  const [count, setCount] = useState(initialCount);
  const [grades, setGrades] = useState([]);

  const counterHandler = num => setCount(prevState => prevState + num);
  const counterInputHandler = event => setCount(Number(event.target.value));
  const addGradeHandler = () => {
    setGrades(prevState => [count, ...prevState]);
    setCount(initialCount);
  }

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
      <button onClick={addGradeHandler}>Add Grade</button>

      {grades && grades.length > 0 && (
        <ul>
          {grades.map((grade, index) => <li key={index}>{grade} <button>Remove</button></li>)}
        </ul>
      )}
    </Container>
  )
}

export default CounterPage;


