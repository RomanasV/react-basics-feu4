import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import TodoItem from './TodoItem';

import './TodoPage.css';

const TodoPage = () => {
  const [taskInput, setTaskInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const inputTaskHandler = event => setTaskInput(event.target.value);
  const descriptionInputHandler = event => setDescriptionInput(event.target.value);

  const newTaskHandler = event => {
    event.preventDefault();
  
    const newTask = {
      id: Math.random(),
      title: taskInput,
      description: descriptionInput,
      date: new Date().toISOString(),
      done: false
    }

    setTasks(prevState => [newTask, ...prevState]);
    setTaskInput('');
    setDescriptionInput('');
  }

  const removeTaskHandler = id => setTasks(prevState => prevState.filter(task => task.id !== id));

  const taskDoneHandler = id => {
    setTasks(prevState => {
      const updatedTasksList = prevState.map(task => {
        if (task.id === id) {
          const updatedTask = { ...task, done: !task.done };

          return updatedTask;
        }

        return task;
      })

      return updatedTasksList;
    })
  }

  return (
    <Container>
      <form onSubmit={newTaskHandler}>
        <div className='form-control'>
          <label htmlFor='task'>Task:</label>
          <input type='text' id='task' value={taskInput} onChange={inputTaskHandler} />
        </div>

        <div className='form-control'>
          <label htmlFor='description'>Task Description:</label>
          <textarea id='description' rows="5" value={descriptionInput} onChange={descriptionInputHandler}></textarea>
        </div>

        <input type='submit' value='Add new task' />
      </form>

      <ul>
        {tasks.map(task => <TodoItem key={task.id} data={task} onDeleteTast={removeTaskHandler} onTaskDone={taskDoneHandler} />)}
      </ul>
    </Container>
  )
}

export default TodoPage