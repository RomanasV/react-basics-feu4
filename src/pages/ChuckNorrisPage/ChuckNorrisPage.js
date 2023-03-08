import React, { useState, useEffect } from 'react'
import Container from '../../components/Container/Container'

const ChuckNorrisPage = () => {
  const [joke, setJoke] = useState('Loading...');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/categories')
      .then(res => res.json())
      .then(categoriesData => {
        setCategories(categoriesData);
        setSelectedCategory(categoriesData[0])
      })
  }, []);

  // useEffect(() => {
  //   fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
  //     .then(res => res.json())
  //     .then(jokeData => {
  //       setJoke(jokeData.value);
  //     })
  // }, [selectedCategory])

  useEffect(() => {
    fetch('https://api.chucknorris.io/jokes/random')
      .then(res => res.json())
      .then(jokeData => {
        setJoke(jokeData.value);
      })
  }, []);

  const firstLetterUpperCase = word => word[0].toUpperCase() + word.slice(1);

  const categoryJokeHandler = (event) => {
    event.preventDefault();

    fetch(`https://api.chucknorris.io/jokes/random?category=${selectedCategory}`)
      .then(res => res.json())
      .then(jokeData => {
        setJoke(jokeData.value);
      })
  }

  const selectCategoryHandler = event => setSelectedCategory(event.target.value);

  return (
    <Container>
      {categories && categories.length > 0 && (
        <form onSubmit={categoryJokeHandler}>
          <select name='category' onChange={selectCategoryHandler}>
            {categories.map((category, index) => <option key={index} value={category}>{firstLetterUpperCase(category)}</option>)}
          </select>
          <button>Get a Joke</button>
        </form>
      )}

      <p>{joke}</p>
    </Container>
  )
}

export default ChuckNorrisPage