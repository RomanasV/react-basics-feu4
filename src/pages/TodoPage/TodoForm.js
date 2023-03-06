import React, { useState } from 'react'

const TodoForm = ({ onNewTodo }) => {
  const [task, setTask] = useState('');
  const [description, setDescription] = useState('');

  const inputTaskHandler = event => setTask(event.target.value);
  const descriptionInputHandler = event => setDescription(event.target.value);

  const newTaskHandler = event => {
    event.preventDefault();
  
    const newTask = {
      id: Math.random(),
      title: task,
      description: description,
      date: new Date().toISOString(),
      done: false
    }

    onNewTodo(newTask);

    setTask('');
    setDescription('');
  }

  return (
    <form onSubmit={newTaskHandler}>
      <div className='form-control'>
        <label htmlFor='task'>Task:</label>
        <input type='text' id='task' value={task} onChange={inputTaskHandler} />
      </div>

      <div className='form-control'>
        <label htmlFor='description'>Task Description:</label>
        <textarea id='description' rows="5" value={description} onChange={descriptionInputHandler}></textarea>
      </div>

      {task && description && <input type='submit' value='Add new task' />}
    </form>
  )
}

export default TodoForm