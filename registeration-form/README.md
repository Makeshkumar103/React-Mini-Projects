# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- working app.js first file
import { useState } from 'react';
import './App.css';
import { addUser, findUser, users, getUsersAsJson } from './assets/services/data.js';

function App() {
  const [activePage, setActivePage] = useState('register'); // 'register' | 'login' | 'home'

  // Registration state
  const [regForm, setRegForm] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [regMessage, setRegMessage] = useState('');

  // Login state
  const [loginForm, setLoginForm] = useState({
    username: '',
    password: '',
  });
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [loginError, setLoginError] = useState('');

  const handleRegisterChange = (e) => {
    const { name, value } = e.target;
    setRegForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!regForm.username || !regForm.password || !regForm.email) {
      setRegMessage('Please fill all fields.');
      return;
    }

    addUser({
      username: regForm.username,
      password: regForm.password,
      email: regForm.email,
    });

    setRegMessage('User registered successfully!');
    setRegForm({ username: '', password: '', email: '' });
  };

  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const user = findUser(loginForm.username, loginForm.password);
    if (user) {
      setLoggedInUser(user);
      setLoginError('');
      setActivePage('home'); // go to Home (admin dashboard) after successful login
    } else {
      setLoggedInUser(null);
      setLoginError('Invalid username or password.');
    }
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
        <div className="card">
          <h2>Registration Form</h2>
          <form onSubmit={handleRegisterSubmit} className="form">
            <label>
              Username
              <input
                type="text"
                name="username"
                value={regForm.username}
                onChange={handleRegisterChange}
                placeholder="Enter username"
              />
            </label>
            <label>
              Email
              <input
                type="email"
                name="email"
                value={regForm.email}
                onChange={handleRegisterChange}
                placeholder="Enter email"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={regForm.password}
                onChange={handleRegisterChange}
                placeholder="Enter password"
              />
            </label>
            <button type="submit">Register</button>
          </form>
          {regMessage && <p className="message">{regMessage}</p>}
        </div>
      )}

      {activePage === 'login' && (
        <div className="card">
          <h2>Login</h2>
          <form onSubmit={handleLoginSubmit} className="form">
            <label>
              Username
              <input
                type="text"
                name="username"
                value={loginForm.username}
                onChange={handleLoginChange}
                placeholder="Enter username"
              />
            </label>
            <label>
              Password
              <input
                type="password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
                placeholder="Enter password"
              />
            </label>
            <button type="submit">Login</button>
          </form>
          {loginError && <p className="error">{loginError}</p>}
        </div>
      )}

      {activePage === 'home' && loggedInUser && (
        <div className="card">
          <h2>Admin Dashboard (Home)</h2>
          <p className="welcome">
            Welcome, <strong>{loggedInUser.username}</strong>
          </p>

          <div className="user-details">
            <h3>Logged In User</h3>
            <p>
              <strong>Username:</strong> {loggedInUser.username}
            </p>
            <p>
              <strong>Email:</strong> {loggedInUser.email}
            </p>
          </div>

          <div className="user-list">
            <h3>All Registered Users (from data.js)</h3>
            <table className="user-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {users.map((u) => (
                  <tr key={u.id}>
                    <td>{u.id}</td>
                    <td>{u.username}</td>
                    <td>{u.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="json-view">
            <h3>Users JSON (data.js)</h3>
            <pre>{getUsersAsJson()}</pre>
          </div>
        </div>
      )}
    </div>
  );
}

export default App; -->
