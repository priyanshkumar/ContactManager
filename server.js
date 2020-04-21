const express = require('express');
const path = require('path');
const connectDB = require ('./config/db')

// Creating express server
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Connection DB
connectDB();

app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to ContactKeeper API...' });
});

app.use('/contacts', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});