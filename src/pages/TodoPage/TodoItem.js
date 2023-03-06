import React from 'react'

const TodoItem = ({data, onTaskDone, onDeleteTask}) => {
  return (
    <li onClick={() => onTaskDone(data.id)} className={data.done ? 'done' : ''} key={data.id}>
      {data.title} 
      <button onClick={() => onDeleteTask(data.id)}>Remove</button>
    </li>
  )
}

export default TodoItem