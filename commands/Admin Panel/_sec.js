/*CMD
  command: /sec
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ary = Bot.getProperty("sajson")
var arr = ary ? ary : []

var json = {
  id: user.telegramid,
  name: user.username
}

arr.push(json)

Bot.setProperty("sajson", arr, "json")
Api.editMessageText({
  message_id: request.message.message_id,
  text: "*📠 Your Panel Created : ✅*",
  parse_mode: "markdown",
  disable_web_page_preview: true
})
Bot.runCommand("🛍Sellers Account🛍")

