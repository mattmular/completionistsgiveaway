require('dotenv').config();
const { Intents, Client } = require("discord.js");
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000;

const client = new Client({ intents: [
    Intents.FLAGS.GUILDS, 
    Intents.FLAGS.GUILD_MESSAGES
]});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    client.user.setActivity('minecraft ost', { type: 'LISTENING' });
});

client.on('error', error => {
	console.log("Discord Error:\n"+error);
});

client.login(process.env.TOKEN);

app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});