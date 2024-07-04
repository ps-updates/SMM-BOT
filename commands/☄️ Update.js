/*CMD
  command: ☄️ Update
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

let udi = Bot.getProperty("update")
if(!udi){
Bot.sendMessage("`😣 No update`")
return
}
Bot.sendMessage(udi)
