const { MessageEmbed } = require('discord.js');
const { ReactionPages } = require('reconlx')

module.exports = {
    name: 'help',
    aliases: [],
    utilisation: '{prefix}help',
    execute(client, message, args, Discord){
        const first = new MessageEmbed()
        .setTitle('title')
        .setColor('RANDOM')
        .addField('line 1')
        .addField('line 2')
        .addField('title', 'description', true)

        const second = new MessageEmbed()
        .setTitle('title')
        .setColor('RANDOM')
        .addField('line1')
        .addField('line2')
        .addField('title', 'description', true)

        const third = new MessageEmbed()
        .setTitle('title')
        .setColor('RANDOM')
        .addField('line1')
        .addField('line2')
        .addField('title', 'description', true)


        const pages = [first, second, third];
        ReactionPages(message, pages, false)
    }
}