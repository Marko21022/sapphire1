const express = require('express');
const app = express();

app.use(express.json());

// Example API routes
app.post('/api/ban', async (req, res) => {
  // Your ban logic here (e.g., calling Discord API)
  res.send('Ban request received');
});

app.post('/api/kick', async (req, res) => {
  // Your kick logic here (e.g., calling Discord API)
  res.send('Kick request received');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
