/*CMD
  command: /price
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
var ppp = p.cost

Bot.setProperty("changeprice", pi) 
Bot.setProperty("oldprice", ppp) 
Bot.sendMessage("*Send New Price Of "+name+"*\nor click on /free for sell free this script") 
Bot.runCommand("/price2") 

