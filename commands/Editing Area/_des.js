/*CMD
  command: /des
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Editing Area

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var pi = params
var p = Bot.getProperty(pi)
var name = p.pname

Bot.setProperty("changedes", pi)
Bot.sendMessage("*Send New Description Of " + name + "*")
Bot.runCommand("/des2")

