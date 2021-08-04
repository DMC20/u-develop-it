const mysql = require('mysql2');

const express = require ('express');

const PORT = process.env.PORT || 3001;
const app = express ();

// Express middleware 
app.use(express.urlencoded({ extended: false}));
app.use(express.json());

// Connect to Database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MYSQL username,
        user: 'root',
        // MYSQL password
        password: 'Password',
        database: 'election'
    },
    console.log('Connected to the election database.')
);

db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

//Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// Function to start express.js server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});