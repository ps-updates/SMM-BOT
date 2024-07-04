/*CMD
  command: /discount
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: How Much You Want Discount On All Script ? 

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(message)) {
  Bot.sendMessage("➕ Enter A Numeric Value")
  return
} else {
  var dd = 100 - message
  Bot.setProperty("discount", dd, "string")
  Bot.sendMessage("*Done*")
}

