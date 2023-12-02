const Bot = require('../../structures/client')
const Discord = require('devland.js')

module.exports = {
    name: 'interaction',
    /**
     * @param {Bot} client
     * @param {Discord.Interaction} interaction
     */
    run: async(client, interaction) => {
        if(interaction.isSlashCommand) {
            let cmd = client.commands.get(interaction.commandName)
            if(cmd){
                cmd.run(client, interaction)
            }
        }
    }
}