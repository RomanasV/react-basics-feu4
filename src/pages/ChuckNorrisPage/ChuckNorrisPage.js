import React, { useState, useEffect } from 'react'
import Container from '../../components/Container/Container'

const ChuckNorrisPage = () => {
  const [joke, setJoke] = useState('Loading...');
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(jokeData => {
        setJoke(jokeData.value);
      })
  }, [count]);

  return (
    <Container>
      <button onClick={() => setCount(prevState => prevState + 1)}>+1</button>
      <button onClick={() => setCount2(prevState => prevState + 2)}>+2</button>
      <h1>{count}</h1>
      <h1>{count2}</h1>
      <p>{joke}</p>
    </Container>
  )
}

export default ChuckNorrisPage