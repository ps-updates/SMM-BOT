/*CMD
  command: /reply2
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Support
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var admin = Bot.getProperty("admin_chat")
if(user.telegramid == admin){
var id = User.getProperty("reply?id")
Bot.sendInlineKeyboardToChatWithId(id,[{title:"↩️ Reply to Administrator", command:"/support"}],"*🔍 Message From Administrator:*\n\n"+message+"")
Bot.sendMessage("*♨️ Message Sent To User!*")

}else{

return
}
