/*CMD
  command: invite
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Extra

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 👨‍👨‍👧‍👦 referral, /reffer
  group: 
CMD*/

var perref = 0.05 // Amount User Gets Per Refer
let stat = Bot.getProperty("" + user.telegramid + "?Ban")

if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
  return
}
let cur = Bot.getProperty("cur")
let invLink = RefLib.getRefLink("" + bot.name + "", "User")
var tto =
  "<b>🤑 Earn " +
  perref +
  " " +
  cur +
  " For New Refferal\n\n🔥 Your Total Downlines: " +
  RefLib.getRefCount() +
  "\n\n👨‍👨‍👦 Refferal Earning: " +
  RefLib.getRefCount() * 0.05 +
  " " +
  cur +
  "\n\n✅ Ref Link to share link with your friends: " +
  invLink +
  "</>"
var inl = [
  [
    {
      text: "💐 Share On Telegram",
      url: "https://t.me/share/url?text=" + invLink
    }],
    [{ text: "🍀 My Downline", callback_data: "/list" }
  ],
  [{ text: "🏆 Top Downliner 🏆", callback_data: "/top" }]
]
var qrChartUrl =
  "https://chart.apis.google.com/chart?cht=qr&chs=250x250&" +
  "chl=" +
  invLink +
  "&chld=H|0"

if (request.message_id) {
  Api.sendPhoto({
    photo: qrChartUrl,
    caption: tto,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inl }
  })
  return
}
Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: tto,
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
})

