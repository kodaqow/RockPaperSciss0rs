const express = require('express');
const path = require('path');
require('dotenv').config();

const server = express();
const PORT = process.env.PORT || 3000;

// Middleware to automatically serve everything inside the "public" folder
server.use(express.static(path.join(__dirname, '../public')));

// JSON parser for when you start sending data from the frontend to the database
server.use(express.json());

// Start the server
server.listen(PORT, () => {
    console.log(`🚀 Server is flying smoothly at http://localhost:${PORT}`);
});
