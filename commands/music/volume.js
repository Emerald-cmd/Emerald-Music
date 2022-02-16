const maxVol = require("../../config.js").opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['vol'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = client.player.getQueue(message.guild.id);

       if (!queue || !queue.playing) return message.channel.send(`${message.author}, There is no music currently playing!. <:warning:943421375526355024>`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Current volume: **${queue.volume}** 🔊\n**To change the volume, with \`1\` to \`${maxVol}\` Type a number between.**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, The volume you want to change is already the current volume <:warning:943421375526355024>`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, **Type a number from \`1\` to \`${maxVol}\` to change the volume .** <:warning:943421375526355024>`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Volume changed: **%${vol}**/**${maxVol}** 🔊` : `${message.author}, Something went wrong. <:warning:943421375526355024>`) ;
    },
};