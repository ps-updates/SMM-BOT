/*CMD
  command: /add_bal2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("adminID")
if (user.telegramid == admin) {
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n)
  }
  var value = message
  if (!isNumeric(value)) {
    Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*")
    Bot.runCommand("/add_bal2")
    return
  }
  let amount = parseFloat(message)
  let tgid = User.getProperty("editid")
  let cur = Bot.getProperty("cur")
  let bal = ResLib.anotherUserRes("balance", tgid)
  bal.add(amount)
  Bot.sendMessage("💰Amount Added Successfully.\n\nDetails Below")
  Api.sendMessage({
    chat_id: tgid,
    text: "*➕ Balance Added :* " + value + " " + cur + "",
    parse_mode: "Markdown"
  })
  Bot.sendMessage(
    "*🆔 User Id :-* " +
      tgid +
      "\n\n*💰Amount Added:- *" +
      amount +
      "\n\n💰 Balance   :- " +
      bal.value()
  )
} else {
  Bot.sendMessage(" ")
}

