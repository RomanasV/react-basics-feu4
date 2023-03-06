import React, { useState } from 'react';
import Container from '../../components/Container/Container';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

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
      <TodoForm 
        onNewTodo={newTaskHandler}
        onInputChange={inputTaskHandler}
        onDescriptionChange={descriptionInputHandler}
        title={taskInput}
        description={descriptionInput}
      />
      
      <TodoList data={tasks} onDeleteTask={removeTaskHandler} onTaskDone={taskDoneHandler} />

    </Container>
  )
}

export default TodoPage