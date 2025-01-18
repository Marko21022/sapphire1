const express = require('express');
const { banUser, kickUser } = require('./discord');
const router = express.Router();

router.post('/ban', async (req, res) => {
  const { guildId, userId, reason } = req.body;
  try {
    await banUser(guildId, userId, reason);
    res.status(200).send('User banned successfully.');
  } catch (error) {
    res.status(500).send('Error banning user.');
  }
});

router.post('/kick', async (req, res) => {
  const { guildId, userId, reason } = req.body;
  try {
    await kickUser(guildId, userId, reason);
    res.status(200).send('User kicked successfully.');
  } catch (error) {
    res.status(500).send('Error kicking user.');
  }
});

module.exports = router;
