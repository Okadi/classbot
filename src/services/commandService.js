const loggingService = require('./loggingService.js')
const prefix = require('../files/config.json').prefix
const commands = require('../commands.js').COMMANDS

const loggingServiceInstance = new loggingService()

module.exports = class CommandService {
    constructor() {
    }

    handleCommand(message) {      
        const splitMessage = message.content.split(' ')

        if(!prefix.includes(splitMessage[0].substring(0, 1)) && !message.author.bot ) {
            loggingServiceInstance.redLog(message)
            return
        } else if(message.author.bot) {
            loggingServiceInstance.cyanLog(message)
            return
        }
        
        const commandsFilter = commands.filter((command) => {
             return command.keyword === splitMessage[0].substring(1, splitMessage[0].length)
        })
        
        if(commandsFilter.length !== 1) {
            loggingServiceInstance.redLog(message)
            return
        }

        const responsePromise = commandsFilter[0].response(splitMessage[1])

        Promise.resolve(responsePromise).then((response) => {
            message.channel.send(response)
        })

        loggingServiceInstance.greenLog(message)
    }
}