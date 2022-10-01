const { REST, SlashCommandBuilder, Routes } = require('discord.js');
const { 1024048024915279903, 993191636534308944, token } = require('./config.json');

const commands = [
	new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!'),
	new SlashCommandBuilder().setName('user').setDescription('Replies with user info!'),
]
	.map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);

rest.put(Routes.applicationGuildCommands(1024048024915279903, 993191636534308944), { body: commands })
	.then((data) => console.log(`Successfully registered ${data.length} application commands.`))
	.catch(console.error);