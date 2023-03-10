import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

import './TodoPage.scss';

const TodoPage = () => {
  const [tasks, setTasks] = useState([]);

  const tasksUpdateHandler = newTodo => setTasks(prevState => [newTodo, ...prevState]);
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
      <TodoForm onNewTodo={tasksUpdateHandler} />
      
      <TodoList data={tasks} onDeleteTask={removeTaskHandler} onTaskDone={taskDoneHandler} />
    </Container>
  )
}

export default TodoPage