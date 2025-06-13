// server.js
/*const express = require('express');
const { sequelize, Student } = require('./models/student');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// API route for login
app.post('/login', async (req, res) => {
  const { rollno, password } = req.body;

  try {
    const student = await Student.findOne({ where: { rollno, password } });

    if (student) {
      res.json({ success: true, student });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Error syncing the database:', error);
});*/
// server.js
/*const express = require('express');
const { sequelize, Student } = require('./models/student');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.post('/login', async (req, res) => {
  const { userType, rollNo, parentName, password } = req.body;

  try {
    let user;
    if (userType === 'student') {
      user = await Student.findOne({ where: { rollNo, password } });
    } else if (userType === 'parent') {
      user = await Student.findOne({ where: { parentsName: parentName, parentsPassword: password } });
    }

    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Error syncing the database:', error);
});*/
const express = require('express');
const { sequelize, Student } = require('./models/student');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// Route for the homepage
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Route for the dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

// API route for login
app.post('/login', async (req, res) => {
  const { userType, rollNo, password } = req.body;

  try {
    let user;
    if (userType === 'student') {
      user = await Student.findOne({ where: { rollNo, password } });
    } else if (userType === 'parent') {
      user = await Student.findOne({ where: { rollNo, parentsPassword: password } });
    }

    if (user) {
      res.json({ success: true, user });
    } else {
      res.json({ success: false, message: 'Invalid credentials' });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error' });
  }
});

// Start the server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch(error => {
  console.error('Error syncing the database:', error);
});

