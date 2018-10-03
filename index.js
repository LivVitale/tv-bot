const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('guildMemberAdd', member => {
    member.guild.channels.get('418317621365309450').send("<@!" + member.user.id + ">").then(msg => msg.delete());
    console.log('Pinged ' + member.user.username + '.');
})

bot.on('message', message => {
    if (message.channel.name == 'moderation' && message.content == 'ping') {
        message.reply('pong');
    }
    
    if (message.content.includes('potato')) {
        message.reply('🥔');
    }
})

bot.login(''); 

