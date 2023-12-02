const {Client, Store, IntentFlags} = require('devland.js')
const fs = require('fs')

module.exports = class Bot extends Client {
    constructor(options = {
        intents: [IntentFlags.ALL],
        enableAllCaches: true
    }) {
        super(options);
        this.setMaxListeners(0)

        this.config = require('../../config')
        this.db = new(require('mxtorie-db'))('mxtorie.json')
        this.commands = new Store()

        this.initEvents()
        this.initCommands()
        this.connect(this.config.token)
    }

    initCommands(){
        const subFolders = fs.readdirSync(`./commands`)
        for(const category of subFolders){
            const files = fs.readdirSync(`./commands/${category}`)
            for(const file of files){
                const command = require(`../../commands/${category}/${file}`)
                this.commands.set(command.data.name, command)
            }
        }
    }
    initEvents(){
        const subFolders = fs.readdirSync(`./events`)
        for(const category of subFolders){
            const files = fs.readdirSync(`./events/${category}`)
            for(const file of files){
                const event = require(`../../events/${category}/${file}`)
                this.on(event.name, (...args) => event.run(this, ...args))
            }
        }
    }
}
