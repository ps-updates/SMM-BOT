/*CMD
  command: 🧣 Redeem
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *🧧 Please Input Redeem Code*

  <<KEYBOARD

  KEYBOARD
  aliases: 🔘 redeem
  group: 
CMD*/

var ti = Bot.getProperty("Code=" + message)
if (!ti) {
  Bot.sendMessage("*❗ Invalid code*")
  return
} else if (ti == "null") {
  Bot.sendMessage("*⚠️ The code is already Redeemed*")
  return
} else var balance = ResLib.userRes("balance")
var key = Bot.getProperty("Chan")
var cur = Bot.getProperty("cur")

balance.add(ti)
Api.sendMessage({
  chat_id: key,
  text:
    "*❤️‍🔥 New Code Redeemed ❤️‍🔥\n━━━━━━━━━━━━━━━━━━\n👷 Name:* " +
    user.first_name +
    "\n*💛 Code:* `" +
    message +
    "`\n*💲Amount:* " +
    ti +
    " *" +
    cur +
    "\n━━━━━━━━━━━━━━━━━━\n➡️ Active Here " +
    key +
    "*",
  parse_mode: "markdown",
  reply_markup: {
    inline_keyboard: [
      [{ text: "📌 Join Now", url: "https://t.me/" + bot.name + "" }]
    ]
  }
})
Bot.sendMessage(
  "*🎊Congratulations, Code successfully Redeemed. \n\n❤️‍🔥 " +
    ti +
    " " +
    cur +
    " Added to your Balance.*"
)
Bot.setProperty("Code=" + message, "null")
return

