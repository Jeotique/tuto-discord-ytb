const Bot = require('../../structures/client')
const Discord = require('devland.js')

module.exports = {
    data: new Discord.GuildCommand({
        name: "ping",
        description: "Répond pong",
        type: Discord.commandType.CHAT_INPUT
    }),
    run: async(client, interaction) => {
        return interaction.reply("pong")
    }
}