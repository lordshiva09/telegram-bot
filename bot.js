const TelegramBot = require('node-telegram-bot-api');

const token = "8688507248:AAFXdcm3pqdDppG0NX3oVzjnGg8wvSn2dXg";

const bot = new TelegramBot(token, { polling: true });

const sourceChannel = -1003700168438;

const targetChannels = [
-1003732680812,
-1003795554484,
-1003858406502,
-1003730810384,
-1003884184932
];

bot.on("channel_post", (msg) => {

if(msg.chat.id == sourceChannel){

targetChannels.forEach(channel => {

bot.copyMessage(channel, sourceChannel, msg.message_id);

});

}

});