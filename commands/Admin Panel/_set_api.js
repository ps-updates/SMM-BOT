/*CMD
  command: /set_api
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
*Send Api Key 🗝️*

➡️ Ex: https://smmpanel.com/api/v2?key=your_key
  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

var ad = Bot.getProperty("adminID")
if (user.telegramid == ad) {
  Bot.setProperty("apiurl", message)
} else {
  Bot.sendMessage("")
}

