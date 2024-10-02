import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const HomePage = () => {
  return (
    <div className="home-page">
      <header className="header">
        <h1>Task Manager</h1>
      </header>
      
      <main>
        <section className="welcome-section">
          <h2>Welcome to your Task Manager</h2>
          <p>Organize your tasks and boost your productivity!</p>
        </section>
        
      </main>
      
      <footer className="footer">
        <p>&copy; 2024 Task Manager. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
