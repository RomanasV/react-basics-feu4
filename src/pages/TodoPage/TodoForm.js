import React from 'react'

const TodoForm = ({ onNewTodo, onInputChange, onDescriptionChange, title, description }) => {
  return (
    <form onSubmit={onNewTodo}>
      <div className='form-control'>
        <label htmlFor='task'>Task:</label>
        <input type='text' id='task' value={title} onChange={onInputChange} />
      </div>

      <div className='form-control'>
        <label htmlFor='description'>Task Description:</label>
        <textarea id='description' rows="5" value={description} onChange={onDescriptionChange}></textarea>
      </div>

      <input type='submit' value='Add new task' />
    </form>
  )
}

export default TodoForm