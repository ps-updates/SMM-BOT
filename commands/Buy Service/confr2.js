/*CMD
  command: confr2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Buy Service

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}

var bal = ResLib.userRes("balance")
var rt = User.getProperty("rate")
var pics = Bot.getProperty("pics")
var versio = User.getProperty("serv")
var seid = User.getProperty("sid")
var post = User.getProperty("post")
var tv = User.getProperty("tv")
var val = tv / 1000
var vall = val * rt

Api.sendPhoto({
  photo: "https://t.me/djmdumcsh/98", // it is a picture!
  caption: "* 🧑‍💻 Your Order Confirmation \n\n 👉 Service : " +
    versio +
    "\n 👉 Quantity : " +
    tv +
    "\n 👉 Charge : Rs " +
    vall +
    "\n 👉 Link : " +
    post +
    "\n\n💰 Your Balance : Rs " +
    bal.value().toFixed(3) +
    "*",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "✅ Confirm", callback_data: "ApiCheckx" },
        { text: " ❌️ Cancel ", callback_data: "🔙 Back" }
      ],
      [
        { text: "❗️Precautions", callback_data: "pre" }
      ]
    ]
  }
});

