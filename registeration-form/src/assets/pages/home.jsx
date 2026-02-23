// import { users, getUsersAsJson } from '../services/data.js';
import { users } from "../services/data";

function HomePage({ loggedInUser }) {
  if (!loggedInUser) {
    return (
      <div className="card">
        <h2>Admin Dashboard (Home)</h2>
        <p>You must be logged in to view this page.</p>
      </div>
    );
  }

  return (
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

      {/* <div className="json-view">
        <h3>Users JSON (data.js)</h3>
        <pre>{getUsersAsJson()}</pre>
      </div> */}
    </div>
  );
}

export default HomePage;


