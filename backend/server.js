const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());
const PORT = process.env.PORT;
const API_KEY = process.env.APIKEY; // Accessing API key from environment variable

// Serve the static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Catch-all route to serve the frontend app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

app.get('/api/keys', async (req, res) => {
    try {
        res.send({ apiKey: API_KEY });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});