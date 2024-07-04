/*CMD
  command: /name
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

Bot.setProperty("changename", pi) 
Bot.sendMessage("*Send New Name Of "+name+"*") 
Bot.runCommand("/name2") 

