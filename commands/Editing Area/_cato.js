/*CMD
  command: /cato
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

Bot.setProperty("changecato", pi) 
Bot.sendMessage("*Send New Category Of "+name+"*") 
Bot.runCommand("/cato2") 

