/*CMD
  command: /acceptt
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id
  User.setProperty("accept", "on")
  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

Bot.sendMessage("*✅ Now You Can Use Bot Now*")

