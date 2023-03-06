import React from 'react';
import TodoItem from './TodoItem';


const TodoList = ({ data, onDeleteTask, onTaskDone }) => {
  return (
    <ul>
      {data.map(task => <TodoItem key={task.id} data={task} onDeleteTask={onDeleteTask} onTaskDone={onTaskDone} />)}
    </ul>
  )
}

export default TodoList