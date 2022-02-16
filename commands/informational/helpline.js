module.exports = {
    name: 'helpline',
    aliases: [],
    utilisation: '{prefix}helpline',

    execute(client, message, args) {
    message.author.send("Lifeline: 13 11 14\nDepression Hotline: 1-630-482-9696\nSuicide Hotline: 1-800-784-8433\nSexuality Support: 1-800-246-7743\nEating Disorders Hotline: 1-847-831-3438\nRape and Sexual Assault: 1-800-656-4673\nGrief Support: 1-650-321-5272\nRunaway: 1-800-843-5200, 1-800-843-5678, 1-800-621-4000\nSelf Harm: 1-800-DONT CUT (1-800-366-8288)\nGay, Lesbian, Bisexual, and Transgender (GLBT) Youth Support Line 800-850-8078\nNational Child Abuse Hotline 1-800-422-4453\nNational Domestic Violence Hotline 1-800-799-SAFE (1-800-799-7233)\nNational Drug Abuse Hotline 1-800-662-HELP (1-800-662-4357)\nNational Youth Crisis Hotline 1-800-448-4663")
    message.channel.send('Check Your DMs <a:purple_heart~1:943421375622815744>');
    },
};