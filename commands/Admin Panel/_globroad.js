/*CMD
  command: /globroad
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *Send Any Message For Broadcast:*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
if (user.telegramid == adm) {
  var fullBotUsers = Bot.getProperty("wholeUsers")
  if (message.length > 10000) {
    Bot.sendMessage("Message Is Too Big.")
    Bot.runCommand("Broadcastt")
    return
  }
  for (var index in fullBotUsers) {
    var info = fullBotUsers[index]
    var polll = [
      [{ text: "🎤 Talk to Admin", callback_data: "/replyadmin_sos" }]
    ]
    Api.sendMessage({
      chat_id: info,
      text: "*🔊 Admin ~ BroadCast\n\n" + message + "*",
      parse_mode: "markdown",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: polll }
    })
  }
  Bot.sendMessage(
    "*✔️Broadcast Sent To All Active Users* Your Broadcast Was: \n\n" +
      message +
      ""
  )
} else {
  Bot.sendMessage("")
}

