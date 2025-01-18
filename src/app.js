const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { initDiscord } = require('./discord');
const routes = require('./routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public')); // Serve frontend

// Routes
app.use('/api', routes);

// Initialize Discord client
initDiscord();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
