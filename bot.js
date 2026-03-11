const TelegramBot = require('node-telegram-bot-api');
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Bot is running");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

const token = process.env.BOT_TOKEN;

const bot = new TelegramBot(token, { polling: true });

const sourceChannel = -1003700168438;

const targetChannels = [
-1003732680812,
-1003795554484,
-1003858406502,
-1003730810384,
-1003884184932,
-1003866998457,
-1003696678983,
-1003833837993,
-1003616717450,
-1003746525854,
-1003711269762,
-1003598472023,
-1003818125531,
-1003346140116,
-1003147892872,
-1003582157036,
-1003135407318,
-1003787499562,
-1003752231868,
-1003807344179,
-1003670966361
];

bot.on("channel_post", async (msg) => {

if(msg.chat.id == sourceChannel){

for (let channel of targetChannels) {

try {

await bot.copyMessage(channel, sourceChannel, msg.message_id);

console.log(`Sent to ${channel}`);

} catch (error) {

console.log(`Failed to send to ${channel}`, error.message);

}

}

}

});