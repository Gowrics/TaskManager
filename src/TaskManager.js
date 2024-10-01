import React, { useState, useEffect } from 'react';

const TaskManager = () => {
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const saveTasksToLocalStorage = (tasks) => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

//addTask Function
  const addTask = () => {

  //Creating a New Task Object:
    const newTask = {
      id: `task-${Date.now()}`,
      title,
      description,
      completed: false,
    };
    if (title === '' || description === '') {
      alert('Please enter both a title and a description.');
      return; // Exit the function if either input is empty
    }
  
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    saveTasksToLocalStorage(updatedTasks);
    //resetting input fields
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
  const newTitle = prompt('New Title:', tasks.find(task => task.id === taskId)?.title);
  const newDescription = prompt('New Description:', tasks.find(task => task.id === taskId)?.description);
  
  // Check if title or description is empty
  if (newTitle === '' || newDescription === '') {
    alert('Please enter both a title and a description.');
    return; // Exit the function if either input is empty
  }

  // If inputs are valid, update the task
  const updatedTasks = tasks.map((task) =>
    task.id === taskId ? { ...task, title: newTitle, description: newDescription } : task
  );
  setTasks(updatedTasks);
  saveTasksToLocalStorage(updatedTasks);
};

  const handleSignIn = (e) => {
    e.preventDefault();
    // Simple username/password check (replace this with real authentication)
    if (username === 'graspear' && password === 'graspear') {
      setIsAuthenticated(true);
    } else {
      alert('Invalid credentials');
    }
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  return (
    <div>
      <h1>Task Manager</h1>
      {!isAuthenticated ? (
        <form onSubmit={handleSignIn}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Sign In</button>
        </form>
      ) : (
        <div>
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
                <button className={task.completed ? 'yes' : 'no'} onClick={() => toggleTaskCompletion(task.id)}>
                  {task.completed ? 'Mark as Incomplete' : 'Mark as Completed'}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
                <button onClick={() => editTask(task.id)}>Edit</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskManager;
