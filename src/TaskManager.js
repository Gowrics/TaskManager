import React, { useState, useEffect } from 'react';

const TaskManager = ({ handleSignOut }) => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  const addTask = () => {
    if (title === '' || description === '') {
      alert('Please enter both a title and a description.');
      return;
    }

    const newTask = {
      id: `task-${Date.now()}`,
      title,
      description,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);

    setTitle('');
    setDescription('');
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  const editTask = (taskId) => {
    const currentTask = tasks.find((task) => task.id === taskId);
    const newTitle = prompt('New Title:', currentTask?.title);
    const newDescription = prompt('New Description:', currentTask?.description);

    if (newTitle === null || newDescription === null) return;
    if (newTitle === '' || newDescription === '') {
      alert('Please enter both a title and a description.');
      return;
    }

    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, title: newTitle, description: newDescription } : task
    );
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <button onClick={handleSignOut}>Sign Out</button>
      <div>
        <input
          type="text"
          placeholder="Task Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <h2 className={task.completed ? 'completed' : ''}>{task.title}</h2>
            <p>{task.description}</p>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
            </button>
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button onClick={() => editTask(task.id)}>Edit</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskManager;
