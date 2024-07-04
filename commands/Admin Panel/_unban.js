/*CMD
  command: /unban
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 👨‍💻 *Send the User ID to UNBAN Him*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
if (user.telegramid == adm) {
  var tgi = message
  //Bot.setProperty("Chat"+message, chat, "json")
  var us = Bot.getProperty("Chat" + message + "", "null")
  //Bot.inspect(us.id)//chat)//JSON.parse(us))
  if (us == "null") {
    Bot.sendMessage(
      "*User was Not Found to Ban!! *\n\nPlease Recheck User's Telegram I'd"
    )
    return
  }

  var bnn = Bot.getProperty("unBanned_Users", [])
  for (var ini in bnn) {
    var uni = bnn[ini]
    if (uni == tgi) {
      Bot.sendMessage("ℹ️ Seems like User is Already Banned! ")
      Bot.run({
        command: "/setUserChat " + message + "",
        user_id: message
      })
      return
    }
  }
  bnn.push(user.telegramid)
  Bot.setProperty("unBanned_Users", bnn, "json")
  Bot.unblockChat(us.id)
  Bot.sendMessage(
    "[" +
      us.user.first_name +
      "](tg://user?id=" +
      tgi +
      ") *Welcome Now You Can Use*"
  )
} else {
  Bot.sendMessage(" ")
}

