/*CMD
  command: /top
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

var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
  User.setProperty("already", user.telegramid, "text")
}
let list = RefLib.getTopList()
//var list = Libs.ResourcesLib.getTopList() 
var am = list * 0.5

list.order_by = "integer_value"
list.order_ascending = false
list.page = 1
list.per_page = 10

var items = list.get()
//Bot.inspect(items);

var msg = "*🏆 Top Refferal Rank 🏆*"

var prop
for (var ind in items) {
  prop = items[ind]
  msg =
    msg +
    "\n\n*" +
    String(parseInt(ind) + 1) +
    ".*  " +
    Libs.commonLib.getLinkFor(prop.user) +
    " \n➡️* Invited:* " +
    String(prop.value) +
    " *Users*"
}
var inl = [[{ text: "🔙 Back", callback_data: "invite" }]]
Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: msg,
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
})

