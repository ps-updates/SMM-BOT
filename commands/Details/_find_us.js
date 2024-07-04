/*CMD
  command: /find_us
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Details

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var splt = params.split("-")
var usid = splt[0]
var am = splt[1]
var add = parseInt(am) + 1
var min = parseInt(am) - 1
var multi = am * 2
var dev = am / 2
var us = Bot.getProperty("Chat" + usid, null)
var cur = Bot.getProperty("cur")
let bal = ResLib.userRes("balance")
  .value()
  .toFixed(1)
if (am < 1) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❕ Minimum Transfer Is 1 " + cur + ".",
    show_alert: true
  })
  return
}
if (us == null) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❌ User Not Found In Database",
    show_alert: true
  })
  return
}
if (usid == user.telegramid) {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "😌 You Can't Transfer Balance To Your Own Telegram ID. ",
    show_alert: true
  })
  return
}
var inff = "<a href='tg://user?id=" + usid + "'>" + us.user.first_name + "</>"

var tt =
  "<b>✅ User Has Been Found.\n\n👤 Name:</> " +
  inff +
  " \n\n💵<b> Amount:</> " +
  am +
  " <b>" +
  cur +
  "</>"
var but = [
  [
    { text: "Max", callback_data: "/find_us " + usid + "-" + bal },
    { text: "+1", callback_data: "/find_us " + usid + "-" + add },
    { text: "-1", callback_data: "/find_us " + usid + "-" + min }
  ],
  [
    { text: "Min", callback_data: "/find_us " + usid + "-1" },
    { text: "×2", callback_data: "/find_us " + usid + "-" + multi },
    { text: "÷2", callback_data: "/find_us " + usid + "-" + dev }
  ],
  [
    { text: "⬆️ Return", callback_data: "/t_o_bal" },

    {
      text: "🪃 Transfer",
      callback_data: "/transfer_bal " + usid + "-" + am
    }
  ]
]
Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: tt,
  parse_mode: "html",
  reply_markup: { inline_keyboard: but }
})
