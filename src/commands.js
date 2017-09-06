const request = require('request-promise')
const osuapi = require('./files/token.json').osuapi

module.exports = {
    COMMANDS: [
            PING = { keyword: 'ping', response: () => 'loli butts' },
            UNPING = { keyword: 'unping', response: () => 'wot' },
            ROLL = { keyword: 'roll', response: (parameter) => Math.floor(Math.random() * (parseInt(parameter) || 100)) },
            OSU = { keyword: 'osu', response: (parameter) => getUser(parameter) }
    ]
}

// Move this into a new service.

const getUser = (parameter) => {
    return request(`https://osu.ppy.sh/api/get_user?k=${osuapi}&u=${parameter}`)
    .then((response) => {
        return response
    })
    .catch((err) => {
        console.log(error)
    })
}