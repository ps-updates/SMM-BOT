/*CMD
  command: api26
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Setup

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var r = JSON.parse(content)
var od = r.order
var versio = User.getProperty("serv")
var tv = User.getProperty("tv")
var charge = User.getProperty("charge").toFixed(2)
var bal = ResLib.userRes("balance")
var charge2 = User.getProperty("charge2")

Api.sendPhoto({
  photo: "https://t.me/djmdumcsh/99", // Placeholder URL (replace with your URL or use the kunal property)
  caption:
    "* 🧑‍💻 Your Order Submitted \n\n 👉 Service : " +
    versio +
    "*\n *🎉 Order Id :* `" +
    od +
    "`\n\n*💰 Your Balance : Rs " +
    bal.value().toFixed(3) +
    "*",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        {
          text: "🧡 Check More Details",
          url: "https://t.me/psproofs123"
        }
      ],
      [
        {
          text: "🧡 Check More Details",
          callback_data: "/track" + od + ""
        }
      ]
    ]
  }
})

var phpsbuy = ResLib.userRes("phpsbuy")
var userpayment = ResLib.anotherChatRes("userpayment", "global")
var rn = Libs.Random.randomInt(0.1, 5)
const level = ResLib.userRes("level")
level.add(rn)
userpayment.add(1)
phpsbuy.add(1)

Api.sendMessage({
  chat_id: "@psproofs123",
  text:
    "<b>✅️ New Order Received By " +
    user.first_name +
    "\n\n📝 Order ID : " +
    od +
    "\n\n💻 Service Name: " +
    versio +
    "\n\n📊 Quantity : " +
    tv +
    "\n\n💰 Order Charge : Rs " +
    charge +
    "</b>\n\n<i>🤩 Buy At Cheapest Rate From</i>\n➡️@" +
    bot.name +
    "",
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "🛒 Order now",
          url: "https://t.me/" + bot.name + ""
        }
      ]
    ]
  })
})

