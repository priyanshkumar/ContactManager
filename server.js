const express = require('express');
const path = require('path');
const ConnectDB = require ('./config/db')

// Creating express server
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

// Connection DB
ConnectDB();

app.use('/contacts', require('./routes/contact'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log('Server running on port ' + PORT);
});