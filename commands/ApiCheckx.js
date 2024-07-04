/*CMD
  command: ApiCheckx
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

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var balance = ResLib.userRes("balance")
var totalsp = ResLib.userRes("totalsp")
var rt = User.getProperty("rate")
var mrt = User.getProperty("mrate")
var seid = User.getProperty("sid")
var post = User.getProperty("post")
var tv = User.getProperty("tv")
var url = User.getProperty("apiurl")
var val = tv / 1000
var vall = val * rt
var myprof = val * mrt
//var netp = vall - myprof
//User.setProperty("charge2", netp, "float")
balance.add(-vall)
//Bot.sendMessage(vall)
User.setProperty("charge", vall)
if (balance.value() > vall) {
  HTTP.get({
    url:
      ""+url+"&action=add&service=" +
      seid +
      "&link=" +
      post +
      "&quantity=" +
      tv +
      "",
    success: "api26"
  })
//  balance.remove(+vall)
  totalsp.add(vall)
 // Bot.runCommand("main_menu")
} else {
  Bot.sendMessage("*⚠️ INSUFFICIENT MONEY ⚠️*")
}

