const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { runChat } = require('./runChat');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const PORT = process.env.PORT;

// Serve the static files from the frontend build directory
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Endpoint to handle POST requests for generating prompt
app.post('/api/generate-prompt', async (req, res) => {
    const prompt = req.body.prompt;
    if (!prompt) {
        return res.status(400).send('Prompt is required');
    }

    try {
        const responseText = await runChat(prompt);
        res.send(responseText);
    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred while generating response');
    }
});

// Catch-all route to serve the frontend app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/dist/index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});