module.exports = {
	name: 'beep',
	description: 'Beep boop!',
	execute(message, args) {
		message.channel.send('Boop!');
	},
};
