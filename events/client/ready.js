const Bot = require('../../structures/client')
const Discord = require('devland.js')

module.exports = {
    name: 'ready',
    /**
     * @param {Bot} client
     */
    run: async(client) => {
        console.log(`${client.user.tag} est maintenant connecté`)
        console.log(`${client.guilds.size} serveur${client.guilds.size < 1 ? '':'s'}`)
        client.guilds.map(guild => {
            guild.setCommands(client.commands.map(cmd => cmd.data))
        })
    }
}