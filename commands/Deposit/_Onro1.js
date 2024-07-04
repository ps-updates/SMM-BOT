/*CMD
  command: /Onro1
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

var to = Bot.getProperty("maintenance")
if (to == "on") {
  Bot.sendMessage(
    "*😌 Sorry*, The Bot is currently *🛠 Under Maintenance,*\n    🤘 _Please wait it may take up to 1-12 Hour_."
  )
  return
} else if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var key = Bot.getProperty("Chan")
let cur = Bot.getProperty("cur")
if (content == "Invalid Order id!") {
  Bot.sendMessage("*No Transaction Found!*")
  return
}
var res = JSON.parse(content)
var id = User.getProperty("id")
var balance = Libs.ResourcesLib.userRes("balance")
let free = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"
})
var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
var tm = Libs.DateTimeFormat.format(free, "h:MM:ss T")
var BonuP = Bot.getProperty("paytm_offer", 1)
let history = User.getProperty("history")
var amount = User.getProperty("amount")
var done = User.getProperty(id)
if (done == "ok") {
  Bot.sendMessage("*😤 Dont Try To Cheat *")
  return
}
var suc = res.status
var amoo = res.amount
var okf = amount * BonuP * 1
if (suc == "success") {
  balance.add(+okf)
  User.setProperty(id, "ok")
  Api.sendMessage({
    text:
      "*🎊 Deposit Successful\n\n💸 Amount Received :* ₹" +
      amount +
      "\n\n*➕ Balance Added :* " +
      okf +
      " *" +
      cur +
      "*\n\n*🍭 Txn Id :* `" +
      id +
      "`",
    parse_mode: "Markdown"
  })
  var status = ResLib.anotherChatRes("totaldep", "global")
  status.add(1)
  Api.sendMessage({
    chat_id: key,
    text:
      "*🚀 New Deposit Received 🚀*\n━━━━━━━━━━━━━━━━━━\n*👷User:* " +
      user.first_name +
      "\n*💲Amount:* " +
      amount +
      " *INR\n➕ Balance Added:* " +
      okf +
      " *" +
      cur +
      "*\n━━━━━━━━━━━━━━━━━━\n*➡️ Deposit Again @" +
      bot.name +
      "*",
    parse_mode: "Markdown"
  })
  var rn = Libs.Random.randomInt(0.1, 5)
  const level = ResLib.userRes("level")
  level.add(rn)
  if (history == undefined) {
    var newh =
      "👤*You Have Deposited Through Paytm:*\n*💵 Amount:* " +
      amount +
      " *INR\n➕ Balance Added:* " +
      okf +
      " *" +
      cur +
      "*\n*💖 Date:* " +
      dt +
      "\n*⌚️ TIME:* " +
      tm +
      "M\n\n"
    User.setProperty("history", newh, "string")
  } else {
    var nwh =
      "👤*You Have Deposited Through Paytm:*\n*💵 Amount:* " +
      amount +
      " *INR\n➕ Balance Added:* " +
      okf +
      " *" +
      cur +
      "*\n*💖 Date:* " +
      dt +
      "\n*⌚️ TIME:* " +
      tm +
      "M\n\n"
    var toal = nwh + history
    User.setProperty("history", toal, "string")
  }

  return
}
Bot.sendMessage("*You Didn't Paid Any Amount In Bot*")

