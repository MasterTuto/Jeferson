import { Client } from 'discord.js';
import { registerCommands, registerEvents, registerRules } from './utils';

require('dotenv').config();

const client = new Client({
    intents: [
        'GUILDS',
        'DIRECT_MESSAGES',
        'GUILD_MESSAGES',
        'GUILD_MESSAGE_TYPING',
        'GUILD_MESSAGE_REACTIONS',
    ],
});

client.once('ready', () => console.log('🚀 The bot is running!'));

registerCommands('./commands', client.application?.commands);
registerRules('./rules', client);
registerEvents('./events', client);

client.login(process.env.DISCORD_BOT_TOKEN);
