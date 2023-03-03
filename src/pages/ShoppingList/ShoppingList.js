import { useState } from 'react';
import Container from '../../components/Container/Container';
import './ShoppingList.css'

const ShoppingList = () => {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);

  const submitHandler = event => {
    event.preventDefault();
    
    const newShoppingItem = {
      id: Math.random(),
      title: input,
      done: false,
    }
    
    setList(prevState => [newShoppingItem, ...prevState]);
    setInput('');
  }

  const inputHandler = event => setInput(event.target.value);
  const deleteHandler = id => setList(prevState => prevState.filter(item => item.id !== id));

  const doneHandler = id => {
    setList(prevState => {
      const updatedList = prevState.map((item) => {
        if (item.id === id) {
          const itemToUpdate = {...item};
          itemToUpdate.done = !item.done;

          // const itemToUpdate = { ...item, done: !item.done };

          return itemToUpdate;
        }

        return item;
      });

      return updatedList;
    })
  }

  return (
    <Container>
      <form onSubmit={submitHandler}>
        <div className="form-control">
          <label htmlFor="shopping-item-input">Shopping Item:</label>
          <input type="text" id="shopping-item-input" value={input} onChange={inputHandler} />
        </div>
        <input type="submit" />
      </form>

      <div className="shopping-list-wrapper">
        {list && list.length > 0 ? (
          <>
            <h2>Shopping List:</h2>

            <ul>
              {list.map((item, index) => (
                <li key={index}>
                  <input type="checkbox" onChange={() => doneHandler(item.id)} />
                  <span className={item.done ? 'done' : ''}>{item.title}</span> 
                  <button onClick={() => deleteHandler(item.id)}>Delete</button>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <h2>No shopping items...</h2>
        )}
      </div>
    </Container>
  )
}

export default ShoppingList;