const { MessageEmbed } = require('discord.js');
const { ReactionPages } = require('reconlx')

module.exports = {
    name: 'help',
    aliases: [],
    utilisation: '{prefix}helpline',
    execute(client, message, args, Discord){
        const first = new MessageEmbed()
        .setTitle('Need Help?')
        .setColor('GREEN')
        .addField('Prefix:')

        const second = new MessageEmbed()
        .setTitle('Commands')
        .setColor('GREEN')
        .addField('Prefix:')


        const pages = [first, second];
        ReactionPages(message, pages, false)
    }
}