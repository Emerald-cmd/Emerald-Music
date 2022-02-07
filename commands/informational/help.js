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
        .addField('Prefix: `.`')
        .addField('Who made me?', 'emerald')
        .addField('Commands', 'Page 2 : Normal Commands', 'Page 3 : Music Commands')

        const second = new MessageEmbed()
        .setTitle('Commands')
        .setColor('GREEN')
        .addField('Prefix: `.`')
        .addField('.help')
        .addField('a')

        const pages = [first, second];
        ReactionPages(message, pages, false)
    }
}