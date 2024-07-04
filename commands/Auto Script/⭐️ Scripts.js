/*CMD
  command: ⭐️ Scripts
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Auto Script

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🔙back, /script, 📁 scripts
  group: 
CMD*/

var fullBotUsers = 
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
User.setProperty("already", user.telegramid, "text")}
Bot.sendKeyboard("🌺 Lifafa,🍭 Campaign,🤖 Bots\n🎮 Game, 🎛 Panel,💥 Other,\n🖤 PLP,❤️‍🔥 Logo,🌸 Cryptos\n➕ More,🎃 Extra\n🔙 Back", "*Please choose your Category*") 
