const loggingService = require('./loggingService.js')
const prefix = require('../files/config.json').prefix
const commands = require('../commands.js').COMMANDS

const loggingServiceInstance = new loggingService()

module.exports = class CommandService {
    constructor() {
    }

    handleCommand(message) {      
        const thicc = message.content.split(' ')

        if(!prefix.includes(thicc[0].substring(0, 1)) || message.author.bot) {
            loggingServiceInstance.redLog(message)
            return
        }
        
        const lolis = commands.filter((command) => {
             return command.keyword === thicc[0].substring(1, thicc[0].length)
        })
        
        if(lolis.length !== 1) {
            loggingServiceInstance.redLog(message)
            return
        }

        const boner = lolis[0].response(thicc[1])

        Promise.resolve(boner).then((response) => {
            message.channel.send(response)
        })

        loggingServiceInstance.greenLog(message)
    }
}

/*class CommandService {
    constructor(client) {
        constructor(client) {
            constructor(client) {
                constructor(client) {
                    constructor(client) {
                        constructor(client) {
                            constructor(client) {
                                constructor(client) {
                                    constructor(client) {
                                        constructor(client) {
                                            constructor(client) {
                                                constructor(client) {
                                                    constructor(client) {
                                                        constructor(client) {
                                                            constructor(client) {
                                                                constructor(client) {
                                                                    constructor(client) {
                                                                        constructor(client) {
                                                                            constructor(client) {
                                                                                constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                    constructor(client) {
                                                                                        
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}*/