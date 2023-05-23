const { EmbedBuilder } = require('../lib/index.js');
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
  ],
});

client.on('ready', () => {
  console.log(client.user.tag);
  const channel = client.channels.cache.get('1101961722585174038');
  const embed = new EmbedBuilder().setTitle('Embedified').addFields([
    {
      name: 'Name',
      value: 'Description',
    },
  ]);

  
  channel.send({
    embeds: [embed]
  })

  console.log(embed.toJSON())
});

client.login('');
