/*CMD
  command: /UPI2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.deleteMessage({ message_id: request.message_id })
var id = message

var qrtrs = Bot.getProperty("qrTrans")
var qrt = qrtrs ? qrtrs : []
if (!qrt.includes(id)) {
  var mid = "WkvsJN70580688025091"

  HTTP.get({
    url:
      "https://api.projectoid.site/v1/telegram/paytm/?MERCHANT_KEY=" +
      mid +
      "&TRANSACTION=" +
      id +
      "",
    // "https://txt.i-payments.site/paytmQR/?key=" + mid + "&id=" + id + "",
    success: "/UPI"
  })
} else {
  Api.editMessageCaption({
    message_id: User.getProperty("dep"),
    caption: "<b>❌ One Id Can Be Used One Time Only...</>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/deposit" }]]
    }
  })
}

