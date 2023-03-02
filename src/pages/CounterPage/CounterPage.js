import { useState } from 'react';

import Container from '../../components/Container/Container';

const CounterPage = () => {
  const initialCount = 5;
  const [count, setCount] = useState(initialCount);
  const [grades, setGrades] = useState([]);
  const [name, setName] = useState('');

  const counterHandler = num => setCount(prevState => prevState + num);
  const counterInputHandler = event => setCount(Number(event.target.value));
  const addGradeHandler = () => {
    const gradeData = {
      id: Math.random(),
      name,
      number: count,
    }

    setGrades(prevState => [gradeData, ...prevState]);
    setCount(initialCount);
    setName('');
  }

  const deleteGradeHandler = (id) => setGrades(prevState => prevState.filter(grade => grade.id !== id));

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
      <input type="text" value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={addGradeHandler}>Add Grade</button>

      {grades && grades.length > 0 ? (
        <>
          <h3>Grades list:</h3>
          <ul>
            {grades.map(grade => <li key={grade.id}>{grade.number} {grade.name && `(${grade.name})`}<button onClick={() => deleteGradeHandler(grade.id)}>Remove</button></li>)}
          </ul>
        </>
      ) : <h3>No grades :(</h3>}
    </Container>
  )
}

export default CounterPage;


