const colors = require('colors')

module.exports = class LoggingService {
    constructor() {
    }

    redLog(message) {
        console.log("(".red.bold+message.guild.name.red.bold+") ".red.bold+message.author.username.red.bold+" in #".red.bold+message.channel.name.red.bold+": ".red.bold+message.content)
    }

    greenLog(message) {
        console.log("(".green.bold+message.guild.name.green.bold+") ".green.bold+message.author.username.green.bold+" in #".green.bold+message.channel.name.green.bold+": ".green.bold+message.content)
    }
}