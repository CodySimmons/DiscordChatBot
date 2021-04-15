const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json');

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	}
	else if (message.content.startsWith(`${prefix}beep`)) {
		message.channel.send('Boop.');
	}
    else if (message.content === `${prefix}server`) {
        message.channel.send(`This server's name is ${message.guild.name}`);
    }
    else if (message.content === `${prefix}user-info`) {
        message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
    }
});

client.login(token);
