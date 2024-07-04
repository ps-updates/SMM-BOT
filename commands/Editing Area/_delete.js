/*CMD
  command: /delete
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Editing Area

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var pi = params
var p = Bot.getProperty(pi)
var name = p.pname
var photot = p.photoo
Bot.setProperty("DeleteSc", pi)
var inl = [
  [
    { text: "✔ Delete", callback_data: "/delete2 "+pi },
    { text: "❌ Cancel", callback_data: "/backki " + pi}
  ]
]
if (!photot || photot == "null") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "_✅ Confirmed You Want To delete_ *" + name + "* _Script_",
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
} else {
  Api.editMessageCaption({
    message_id: request.message.message_id,
    caption: "_✅ Confirmed You Want To delete_ *" + name + "* _Script_",
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
}

