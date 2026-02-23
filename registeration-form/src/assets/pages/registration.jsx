import { useState } from 'react';
import { addUser } from '../services/data.js';


function RegistrationPage() {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.username || !form.password || !form.email) {
      setMessage('Please fill all fields.');
      return;
    }

    addUser({
      username: form.username,
      password: form.password,
      email: form.email,
    });

    setMessage('User registered successfully!');
    setForm({ username: '', password: '', email: '' });
  };

  return (
    <div className="card">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} className="form">
        <label>
          Username
          <input
            type="text"
            name="username"
            value={form.username}
            onChange={handleChange}
            placeholder="Enter username"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter email"
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
}

export default RegistrationPage;


