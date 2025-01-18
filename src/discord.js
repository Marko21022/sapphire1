const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers] });

const initDiscord = () => {
  client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  });

  client.login(process.env.DISCORD_TOKEN);
};

const banUser = async (guildId, userId, reason) => {
  const guild = client.guilds.cache.get(guildId);
  const member = guild?.members.cache.get(userId);
  if (member) await member.ban({ reason });
};

const kickUser = async (guildId, userId, reason) => {
  const guild = client.guilds.cache.get(guildId);
  const member = guild?.members.cache.get(userId);
  if (member) await member.kick(reason);
};

module.exports = { initDiscord, banUser, kickUser };
