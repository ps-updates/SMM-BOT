/*CMD
  command: RefCheck
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Setup

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var refi = User.getProperty("refi")
var url =Bot.getProperty("apiurl")
 //User.getProperty("apiurl")
HTTP.get({
  url:
    ""+url+"&action=refill&order=" +
    refi +
    "",
  success: "api15"
})

