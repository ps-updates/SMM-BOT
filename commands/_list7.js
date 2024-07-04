/*CMD
  command: /list7
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

var refList = RefLib.getRefList()
if (!refList.exist) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "⚠️ You have not invited any users",
    show_alert: true
  })
  return
}

var users_rows = ""
var users = refList.getUsers()
var totalRefCount = RefLib.getRefCount() // Fetching total referral count outside the loop

users_rows +=
  "\n\n*➡️ Your Total Referral Count: " +
  totalRefCount +
  "*\n\n👨‍👨‍👦 Your Referred Users ⬇️"

for (var i in users) {
  users_rows += "\n\n👤 " + Libs.commonLib.getNameFor(users[i])
  //Libs.commonLib.getLinkFor(users[ind]); // Building the user rows without repeating the count
}

var msg = users_rows
var inl = [[{ text: "🔙 Back", callback_data: "invite" }]]

Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: msg,
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
})

