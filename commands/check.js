/*CMD
  command: check
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

var user = options.result.status
if ((user == "member") | (user == "administrator") | (user == "creator")) {
  User.setProperty("userStatus", user, "string")
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "🥰 Thanks For Joining us",
    show_alert: false
  })
  Bot.runCommand("M")
}

if (user == "left") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "🚫 Must Join All Channels",
    show_alert: true
  })
}

