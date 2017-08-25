const Discord = require('discord.js')
const client = new Discord.Client()
const colors = require('colors');
const config = require('./files/config.json')
const token = require('./files/token.json')

client.on('ready', () => {
    console.log('Nathan has entered the building.\nYou quake in your boots.\n\nBot successfully started!\n\nMessage log:\n')
    
    client.user.setStatus("online")
    client.user.setPresence({ game: { name: 'with my students', type: 0 } })
});

client.on('message', message => {
    if(message.content === '!ping' && !message.author.bot) {
        message.channel.send('!ping')
        console.log(message.author.username.green.bold+" in #".green.bold+message.channel.name.green.bold+": ".green.bold+message.content);
    } else {
        console.log(message.author.username.red.bold+" in #".red.bold+message.channel.name.red.bold+": ".red.bold+message.content);
    }
});

client.login(token.token)