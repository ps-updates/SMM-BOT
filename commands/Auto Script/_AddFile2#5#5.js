/*CMD
  command: /AddFile2#5#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Auto Script
  answer: *💸 Enter Service Price [1k/-]*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Bot.inspect(params)
if (message == "/free") {
  User.setProperty("cost", "0.001", "string")
  Bot.runCommand("/AddFilex#5#5")
  return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(message)) {
  Bot.sendMessage("➕ Enter A Numeric Value")
  return
} else {
  User.setProperty("cost", message, "float")
}
Bot.runCommand("/AddFilex#5#5")

