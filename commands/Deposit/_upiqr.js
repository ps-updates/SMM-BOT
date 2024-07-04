/*CMD
  command: /upiqr
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

var tt =
  "🔝<b>🔷𝙋𝘼𝙔 𝙃𝙀𝙍𝙀 𝘼𝙉𝘿 𝙎𝙀𝙉𝘿 𝙊𝙍𝘿𝙀𝙍 𝙄𝘿/𝙏𝙍𝘼𝙉𝙎𝘼𝘾𝙏𝙄𝙊𝙉 𝙄𝘿 🔷\n\n🔻𝙎𝙐𝙋𝙋𝙊𝙍𝙏𝙀𝘿 𝙋𝘼𝙔𝙈𝙀𝙉𝙏 𝙈𝙀𝙏𝙃𝙊𝘿🔻\n\n▪️𝙿𝙰𝚈𝚃𝙼\n▪️𝙿𝙷𝙾𝙽𝙴 𝙿𝙰𝚈\n\n🔴 𝙁𝘼𝙈𝙋𝘼𝙔 𝙉𝙊𝙏 𝙎𝙐𝙋𝙋𝙊𝙍𝙏𝙀𝘿 🔴\n\n📣 𝐈𝐅 𝐘𝐎𝐔 𝐖𝐀𝐍𝐓 𝐓𝐎 𝐔𝐒𝐄 𝙁𝘼𝙈𝙋𝘼𝙔 𝙊𝙍 𝐀𝐍𝐘 𝐎𝐓𝐇𝐄𝐑 𝐀𝐏𝐏 𝐓𝐎 𝐏𝐀𝐘 𝐓𝐇𝐄𝐍 𝐃𝐌 @Mak0912</>"
var mm = User.getProperty("dep")
var button = [
  [
    { text: "✅ Deposit", callback_data: "/upipay" },
    { text: "⬅️ Back", callback_data: "/deposit" }
  ]
]
Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://graph.org/file/ce93b35e9a7b310d1f137.jpg",
    caption: tt,
    parse_mode: "html"
  },
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: button }
})

