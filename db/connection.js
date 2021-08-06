const mysql = require('mysql2');

// Connect to Database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MYSQL username 
        user: 'root',
        // MYSQL password
        password: 'Password',
        database: 'election'
    }
);

module.exports = db;