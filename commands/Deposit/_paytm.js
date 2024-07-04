/*CMD
  command: /paytm
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ino = Bot.getProperty("INROffer", 1)
if (ino > 1) {
  var off =
    "<b>🤩 Offer Active »</> <i>Deposit through paytm and Get ×" +
    ino +
    " Amount!! </>"
} else {
  var off = ""
}
var tt =
  "🔝<b>🔷𝙋𝘼𝙔 𝙃𝙀𝙍𝙀 𝘼𝙉𝘿 𝙎𝙀𝙉𝘿 𝙊𝙍𝘿𝙀𝙍 𝙄𝘿/𝙏𝙍𝘼𝙉𝙎𝘼𝘾𝙏𝙄𝙊𝙉 𝙄𝘿 🔷\n\n🔻𝙎𝙐𝙋𝙋𝙊𝙍𝙏𝙀𝘿 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 𝙈𝙀𝙏𝙃𝙊𝘿🔻\n\n▪️𝙿𝙰𝚈𝚃𝙼\n▪️𝙿𝙷𝙾𝙽𝙴𝙿𝙴. </>\n\n" +
  off
var mm = User.getProperty("dep")
var button = [
  [
    { text: "✅ Deposit", callback_data: "/upi" },
    { text: "⬅️ Back", callback_data: "/deposit" }
  ]
]
Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://graph.org/file/70908ec4ab71171abedf7.jpg",
    caption: tt,
    parse_mode: "html"
  },
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})

