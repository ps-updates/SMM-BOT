/*CMD
  command: /history
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")
if (stat == "ban") {
  Bot.sendMessage("*❌ You are banned*")
  return
}
var fullBotUsers = [ ]
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
User.setProperty("already", user.telegramid, "text")}
var his = User.getProperty("history")
if (his == undefined) {
  var go =
    "*🧾 Your All History*" +
    "\n_Currently Your History Is Blank_"
  Bot.sendMessage(go)
} else {
  Bot.sendMessage(
    "*🧾 Your All History*\n_Here you can find your last 15 history_\n\n" +
      his,
    { disable_web_page_preview: true }
  )
}

