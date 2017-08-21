const Discord = require('discord.js')
const client = new Discord.Client()
const config = require('./files/config.json')
const token = require('./files/token.json')

client.on('ready', () => {
    console.log('Nathan has entered the building. \nYou quake in your boots.')
    
    client.user.setStatus("online")
    client.user.setPresence({ game: { name: 'with my students', type: 0 } })
});

client.on('message', message => {
    if(message.content === '!ping') {
        message.reply('pong!')
    }
});

client.login(token.token)