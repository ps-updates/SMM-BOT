/*CMD
  command: /scripte
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

Bot.setProperty("changesceipt", pi) 
Bot.sendMessage("*Send New Script File Of "+name+"*") 
Bot.runCommand("/scripte2") 

