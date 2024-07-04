/*CMD
  command: /AddFilex#5#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Add Service
  answer: 🎉* Enter Service Id*
  keyboard: 
  aliases: 
  group: 
CMD*/

Bot.inspect(params)
if (message == "/free") {
  User.setProperty("sid", "0.001", "string")
  Bot.runCommand("/AddFile3#5#5")
  return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

if (!isNumeric(message)) {
  Bot.sendMessage("➕ Enter A Numeric Value")
  return
} else {
  User.setProperty("sid", message, "float")
}
Bot.runCommand("/AddFile3#5#5")

