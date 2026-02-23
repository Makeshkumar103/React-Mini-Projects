import { useState } from 'react';
import './App.css';
import RegistrationPage from './assets/pages/registration.jsx';
import LoginPage from './assets/pages/login.jsx';
import HomePage from './assets/pages/home.jsx';

function App() {
  const [activePage, setActivePage] = useState('register'); // 'register' | 'login' | 'home'
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLoginSuccess = (user) => {
    setLoggedInUser(user);
    setActivePage('home');
  };

  return (
    <div className="app-container">
      <div className="tabs">
        <button
          className={activePage === 'register' ? 'tab active' : 'tab'}
          onClick={() => setActivePage('register')}
        >
          Registration
        </button>
        <button
          className={activePage === 'login' ? 'tab active' : 'tab'}
          onClick={() => setActivePage('login')}
        >
          Login
        </button>
        {loggedInUser && (
          <button
            className={activePage === 'home' ? 'tab active' : 'tab'}
            onClick={() => setActivePage('home')}
          >
            Home
          </button>
        )}
      </div>

      {activePage === 'register' && (
        <RegistrationPage />
      )}

      {activePage === 'login' && (
        <LoginPage onLoginSuccess={handleLoginSuccess} />
      )}

      {activePage === 'home' && loggedInUser && (
        <HomePage loggedInUser={loggedInUser} />
      )}
    </div>
  );
}

export default App;

