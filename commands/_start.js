/*CMD
  command: /start
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

if (chat.chat_type != "private") {
  Api.sendMessage({
    text: "<a href='https://t.me/" + bot.name + "?start=start'>Message me in private</a>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
  return
}
var int =[[{text:"🧡 Join Our Channel 💚", url:"https://t.me/psproofs123"}],[{text:"✅ Proceed", callback_data:"🟢 Joined"}]]
Api.sendPhoto({
  photo: "https://udayscripts.xyz/Logo.jpg",
  caption: "👮<b> Hello Dear</b> "+user.first_name+"! \n\n<i>⓵st Please Join Channel to Access Bot</i>\n\n<b>💛 Join Our </b> <a href='https://t.me/+VQyS4LLStHEzZjY1'>Alert Channel</a>", 
  parse_mode:"html",
  disable_web_page_preview: true, 
  reply_markup: {inline_keyboard: int}
})
var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
  User.setProperty("already", user.telegramid, "text")
}
Bot.setProperty("Chat" + user.telegramid, chat, "json")
var adm = Bot.getProperty("admin_chat")
if (user.username != undefined) {
  var hh = "[@" + user.username + "]"
} else {
  var hh = ""
}
function touchingOwnLink() {
  Bot.sendMessage("*❌ Stop Clicking Your Own Link*")
}
function attractedByUser(refUser) {
  Api.sendMessage({
    chat_id: refUser.telegramid,
    text:
      "<b>🔋 You Got a New </b><a href='tg://user?id=" +
      user.telegramid +
      "'>Referral</a> " +
      hh +
      "",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}
function alreadyStarted() {}

var tracks = {
  onTouchOwnLink: touchingOwnLink,
  onAtractedByUser: attractedByUser,
  onAlreadyAttracted: alreadyStarted,
  linkPrefix: "User"
}

RefLib.track(tracks)
if (!User.getProperty("UserDone")) {
  User.setProperty("UserDone", true, "boolean")
  var stat = ResLib.anotherChatRes("status", "global")
  stat.add(1)
  Api.sendMessage({
    chat_id: adm, //admin telegram id here
    text:
      "➕ <b>New User Notification</b> ➕\n\n👤<b>User:</b> <a href='tg://user?id=" +
      user.telegramid +
      "'>" +
      user.first_name +
      "</a> " +
      hh +
      "\n\n🆔<b> User ID :</b> <code>" +
      user.telegramid +
      "</code>\n\n🌝 <b>Total User's Count: " +
      stat.value() +
      "</b>",
    parse_mode: "html",
    disable_web_page_preview: true
  })
}

