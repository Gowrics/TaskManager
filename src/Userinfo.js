import React, { useState } from 'react';

const UserForm = () => {
  // State to manage form inputs
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  
  // State to manage the list of users
  const [users, setUsers] = useState([]);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Create a new user object
    const newUser = { name, email, age };

    // Add the new user to the users array
    setUsers([...users, newUser]);

    // Clear form fields
    setName('');
    setEmail('');
    setAge('');
  };

  return (
    <div>
      <h1>User Information Form</h1>
      
      {/* Form to collect user information */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Age:</label>
          <input 
            type="number" 
            value={age} 
            onChange={(e) => setAge(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Add User</button>
      </form>

      <h2>User List</h2>

      {/* List rendering of users */}
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <strong>Name:</strong> {user.name} <br />
            <strong>Email:</strong> {user.email} <br />
            <strong>Age:</strong> {user.age} <br /><br />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserForm;
