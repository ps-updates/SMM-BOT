/*CMD
  command: /addserv
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Add Service

  <<ANSWER
🔭* Send Service's Photo for Adding *
or click on /null if your have not photo
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (data.message == "/null") {
  User.setProperty("phpphoto", "null")
  Bot.runCommand("/AddFile1#5#5")
  return
}
if (request.photo) {
  User.setProperty("phpphoto", request.photo[0].file_id)
  //Api.sendPhoto({photo:request.photo[0].file_id})
  //Bot.sendMessage("")

  Bot.runCommand("/AddFile1#5#5")
  return
}
Bot.sendMessage("❓")

