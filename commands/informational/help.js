const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h'],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();
		embed.setTitle("Command List 📃")
		embed.setDescription("`.help` : Pulls this list of commands up *(h)*\n\n\`.help-music` : Pulls up help list for Music *(hm, music)*\n\n\`.ping` : Shows the ping of the bot *(latency)*\n\n\`.server` : Shows the server stats *(server-info)*\n\n\`.user` : Shows your user info *(user-info)*\n\n\`.helpline` : Messages you a list of help phone hotlines | *TW*")
		embed.setColor("#00D166")
        embed.setTimestamp();
        embed.setFooter('Emerald Bot - by emerald#0652', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};