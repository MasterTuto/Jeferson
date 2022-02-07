import {
    ApplicationCommand,
    ApplicationCommandManager,
    Client,
} from 'discord.js';

export const registerCommands = (
    path: string,
    commands?: ApplicationCommandManager
) => {};

export const registerEvents = (path: string, client: Client) => {};

export const registerRules = (path: string, client: Client) => {};
