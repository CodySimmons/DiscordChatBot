module.exports = {
	name: 'server',
	description: 'displays server',
	execute(message, args) {
		message.channel.send(`This server's name is ${message.guild.name}`);
	},
};
