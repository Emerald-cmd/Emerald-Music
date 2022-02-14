const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'embed',
    aliases: [],
    showHelp: false,
    utilisation: '{prefix}embed',
    embededPagesDescription: async function(message, embedName, pageArray, frontDescription, backDescription) {
        function setEmbed() {
            return embedName.setDescription(`${typeof frontDescription !== 'undefined' ? `${frontDescription}` : ''}${pageArray[page-1]}${typeof backDescription !== 'undefined' ? `${backDescription}` : ''}${typeof backDescription !== 'undefined' ? `${backDescription}` : ''}`).setFooter(`Page ${page} of ${pageArray.length}`);
        };
        function removeReaction(removeEmoji) {
            if(message.channel.type !== 'dm') {
                if(message.guild.me.hasPermission('MANAGE_MESSAGES')) {
                    msg.reactions.cache.find(r => r.emoji.name === removeEmoji).users.remove(message.author.id);
                };
            };
        };

        var page = 1;
        const msg = await message.channel.send(setEmbed());
        const reactions = {"⬅️": "backPage", "➡️": "frontPage", "🗑️": "deleteEmbed"};
        Object.keys(reactions).forEach(reaction => {
            msg.react(reaction);
        });

        const backwardsFilter = (reaction, user) => reaction.emoji.name === '⬅️' && user.id === message.author.id;
        const forwardsFilter = (reaction, user) => reaction.emoji.name === '➡️' && user.id === message.author.id;
        const deleteEmbedFilter = (reaction, user) => reaction.emoji.name === '🗑️' && user.id === message.author.id;
        
        const backwards = msg.createReactionCollector(backwardsFilter, {timer: 60000, dispose: true});
        const forwards = msg.createReactionCollector(forwardsFilter, {timer: 60000, dispose: true});
        const deleteEmbed = msg.createReactionCollector(deleteEmbedFilter, {timer: 60000});

        function filterReaction(filterOption) {
            backwards.on(filterOption, async() => {
                page == pageArray.length - pageArray.length + 1 ? page = pageArray.length : page--;
                msg.edit(setEmbed());
                removeReaction('⬅️');
            });
            forwards.on(filterOption, async() => {
                page == pageArray.length ? page = 1 : page++;
                msg.edit(setEmbed());
                removeReaction('➡️');
            });
        };
        if(message.channel.type !== 'dm') {
            if(message.guild.me.hasPermission('MANAGE_MESSAGES')) {
                filterReaction('collect');
            } else {
                filterReaction('collect');
                filterReaction('remove');
            };
        } else {
            filterReaction('collect');
            filterReaction('remove');
        };
        deleteEmbed.on('collect', async() => {
            if(message.channel.type !== 'dm')
                if(message.guild.me.hasPermission('MANAGE_MESSAGES')) message.delete();
            msg.delete();
        });
    }
};