// Simple in-memory user store in JSON-like format
// In a real app this would be a backend or at least localStorage.

// This is your "database" in JSON format
export const users = [
  {
    id: 1,
    username: 'admin',
    password: 'admin123',
    email: 'admin@example.com',
  },
];

export function addUser(user) {
  // user: { username, password, email }
  const nextId = users.length ? users[users.length - 1].id + 1 : 1;
  users.push({ id: nextId, ...user });
}

export function findUser(username, password) {
  return users.find(
    (u) => u.username === username && u.password === password,
  );
}

// Optional helper if you want to see the pure JSON string
export function getUsersAsJson() {
  return JSON.stringify(users, null, 2);
}
