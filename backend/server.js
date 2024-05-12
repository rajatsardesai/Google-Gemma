const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
const PORT = process.env.PORT;
const API_KEY = process.env.APIKEY; // Accessing API key from environment variable

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