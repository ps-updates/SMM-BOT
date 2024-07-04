/*CMD
  command: /setupdate
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: Enter what you want to put in update button?

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ad = Bot.getProperty("adminID") 
if(user.telegramid != ad){
return}
Bot.setProperty("update", message)
Bot.sendMessage("✅ Done")
