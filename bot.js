const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "_";


client.on('ready', () => {

    console.log('Lets get this show on the road!');
    
        client.user.setStatus('idle', 'helping you!') 
});

      client.on("message", (message) => {
        	if (message.content.startsWith("Hello mr ash!")) {
         		message.reply("What's up?");
            
     }
  });  
client.on('message', message => {
 
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");

       }

});

 

client.login(process.env.BOT_TOKEN);
