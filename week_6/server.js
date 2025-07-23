const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' }
];

const generateId = () => {
  const maxId = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;
  return maxId + 1;
};


app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

app.post('/users', (req, res) => {
  const newUser = {
    id: generateId(),
    name: req.body.name,
    email: req.body.email
  };
  if (!newUser.name || !newUser.email) {
    return res.status(400).send('Name and email are required');
  }
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex(u => u.id === id);

  if (userIndex !== -1) {
    users[userIndex] = {
      ...users[userIndex],
      name: req.body.name || users[userIndex].name,
      email: req.body.email || users[userIndex].email
    };
    res.json(users[userIndex]);
  } else {
    res.status(404).send('User not found');
  }
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = users.length;
  users = users.filter(u => u.id !== id);

  if (users.length < initialLength) {
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
