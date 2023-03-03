import React from 'react'

const TodoItem = ({data, onTaskDone, onDeleteTast}) => {
  return (
    <li onClick={() => onTaskDone(data.id)} className={data.done ? 'done' : ''} key={data.id}>
      {data.title} 
      <button onClick={() => onDeleteTast(data.id)}>Remove</button>
    </li>
  )
}

export default TodoItem