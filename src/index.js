const discord = require('discord.js')
const token = require('./files/token.json').token
const commandService = require('./services/commandService.js')

const client = new discord.Client()
const commandServiceInstance = new commandService()

client.on('ready', () => {
    console.log('Nathan has entered the building.\nYou quake in your boots.\n\nBot successfully started!\n\nMessage log:\n')
    
    client.user.setStatus("online")
    client.user.setPresence({ game: { name: 'with my students', type: 0 } })
});

client.on('message', message => {
    commandServiceInstance.handleCommand(message)
});

client.login(token)