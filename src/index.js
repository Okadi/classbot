const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./files/config.json')
const token = require('./files/token.json')

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if(message.content === 'pingu') {
        message.reply('pongu');
    }
});

client.login(token.token);