const jwt = require('jsonwebtoken');
const path = require('path')
const express = require('express');
const app = express();
const port = 3000;


const dotenv = require('dotenv');

dotenv.config();
process.env.JWT_SECRET;

// Middlewares
app.use(express.static(path.join(__dirname, 'public')));

function generateToken(username) {
  return jwt.sign(username, process.env.JWT_SECRET, { expiresIn: '1800s' });
}

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) {
    return res.sendStatus(401);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    console.log(err);
    if (err) {
        return res.sendStatus(403);
    }
    req.user = user;
    next();
  })
}

app.use((req,res,next) =>{
    req.time = new Date(Date.now()).toString();
    console.log(req.method,req.hostname, req.path, req.time);
    next();
});


// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/api/login', (req, res) => {
    const token = generateToken({ username: req.body.username });
    res.json(token);
});

app.get('/api/data', authenticateToken, (req, res) => {
    res.json({ msg: "Pranay says Hi!" })
});


app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
    console.log(`Routes:`);
    console.log(`  - http://localhost:${port}/`);
    console.log(`  - http://localhost:${port}/api/login`);
    console.log(`  - http://localhost:${port}/api/data`);
});

