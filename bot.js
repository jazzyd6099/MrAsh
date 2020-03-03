const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "_";

//embedColors

const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

client.on('ready', () => {

    console.log('Lets get this show on the road!');
    
       client.user.setPresence({ game: { name: 'Helping you!' }, status: 'idle' })
  .then(console.log)
  .catch(console.error);
});
    client.on("message", (message) => {
    if(message.content.includes('Mr. Ash')) {
        message.reply('I heard my name! What do you need help with?');
    } else
          if(message.content.includes('mr. ash')) {
        message.reply('I heard my name! What do you need help with?');
          }
    });
      client.on("message", (message) => {
        	if (message.content.startsWith("Hello mr ash!")) {
         		message.reply("What's up?");
            } else
                if (message.content == "Hello Mr. Ash")) {
                    message.reply("What's up?");
                } else
                    if (message.content == "hello mr ash")) {
                        message.reply("What's up?');
            
     }
  });  
           client.on("message", (message) => {
               
               if (message.content == "Hello! Here are the commands of what I can do!")) {
                    message.channel.send("Currently WIP.");
                        
                    }
           });
               
client.on('message', message => {
 
  if (!message.content.startsWith(prefix)) return;
 
  if (message.content.startsWith(prefix + "ping")) {
    message.channel.send("pong!");
  } else
      if (message.content.startsWith(prefix + "help)) {
          message.author.send("Hello! Here are the commands of what I can do!");

       }

});

 

client.login(process.env.BOT_TOKEN);
