const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help-music',
    aliases: ['hm',"music"],
    showHelp: false,
    utilisation: '{prefix}help-music',

    execute(client, message, args) {
        const embed = new MessageEmbed();
		embed.setTitle("Music Command List 📃")
		embed.setDescription("`.back` | `.clear` | `.filter` | `.loop` *(lp)* | `.nowplaying` *(np)* | `.pause` | `.play` *(p)* | `.progress` *(time)* | `.queue` *(q)* | `.resume` | `.save` | `.search` | `.skip` | `.stop` *(st)* | `.volume` *(vol)*")
		embed.setColor("#00D166")
        embed.setTimestamp();
        embed.setFooter('Emerald Bot - by emerald#0652', message.author.avatarURL({ dynamic: true }));
        message.channel.send({ embeds: [embed] });
    },
};