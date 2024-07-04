/*CMD
  command: Edited
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Extra

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var perref = 0.05 // Amount User Gets Per Refer
let stat = Bot.getProperty("" + user.telegramid + "?Ban")

if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
  return
}
let msg_id = options.result.message_id
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*.*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*..*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*...*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀᴅ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀᴅɪ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀᴅɪɴ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀᴅɪɴɢ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀᴅɪɴ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀᴅɪ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀᴅ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏᴀ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟᴏ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*ʟ*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*.*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*..*",
  parse_mode: "Markdown"
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: "*...*",
  parse_mode: "Markdown"
})
let cur = Bot.getProperty("cur")
let invLink = RefLib.getLink("" + bot.name + "", "Bot")
var tto =
  "<b>🤑 Earn " +
  perref +
  " " +
  cur +
  " For New Referral\n\n🔥 Your Total Downlines: " +
  RefLib.getRefCount() +
  "\n\n👨‍👨‍👦 Referral Earning: " +
  RefLib.getRefCount() * 0.05 +
  " " +
  cur +
  "\n\n✅ Ref Link to share link with your friends: " +
  invLink +
  "</b>"
var inl = [
  [
    {
      text: "💐 Share On Telegram",
      url: "https://t.me/share/url?text=" + invLink
    }
  ],
  [{ text: "🍀 My Downline", callback_data: "/list" }],
  [{ text: "🏆 Top Downliner 🏆", callback_data: "/top" }]
]
var qrChartUrl =
  "https://chart.apis.google.com/chart?cht=qr&chs=250x250&" +
  "chl=" +
  invLink +
  "&chld=H|0"
Api.editMessageMedia({
  message_id: msg_id,
  media: {
    type: "photo",
    media: qrChartUrl
  }
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: tto,
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
})

