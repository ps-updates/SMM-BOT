/*CMD
  command: /pic
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

Bot.setProperty("changepic", pi) 
Bot.sendMessage("*Send New Photo Of "+name+"*\nor send /null if you have not photo") 
Bot.runCommand("/pic2") 

