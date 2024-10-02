import './App.css';
import React, { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import SignIn from './SignIn';
import TaskManager from './TaskManager';
import OneTimeTaskManager from './OnetimeTaskmanager';
import Expenses from './Expenses';
import Invoice from './Invoice';
import UserForm from './Userinfo';
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state
  const navigate = useNavigate();

  const handleSignOut = () => {
    setIsAuthenticated(false);
    navigate('/signin'); // Redirect to sign-in after sign-out
  };
  //expanse invoice
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };
    return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="exp" element={<Expenses addExpense={addExpense} />} />
        <Route path="inv" element={<Invoice expenses={expenses} />} />
   w      
        <Route path="signin" element={<SignIn setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="tasks"  element={isAuthenticated ? (<TaskManager handleSignOut={handleSignOut} />) 
        :
         (<SignIn setIsAuthenticated={setIsAuthenticated} />)
          }
        />
        <Route path ="onetimetaskmanager" element={<OneTimeTaskManager/>}/>
        <Route path ="listrender" element={<UserForm/>}/>
      
      </Routes>
    </div>
  );
}

export default App;
