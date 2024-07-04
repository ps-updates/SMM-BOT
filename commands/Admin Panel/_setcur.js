/*CMD
  command: /setcur
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🤡* Send Short Currency Name For Your Bot:*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ad = Bot.getProperty("adminID")
if (ad == user.telegramid) {
  Bot.setProperty("cur", "" + message + "")
  Bot.sendMessage("*Done*")
} else {
  Bot.sendMessage("")
}

