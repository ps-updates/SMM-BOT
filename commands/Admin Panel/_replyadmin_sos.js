/*CMD
  command: /replyadmin_sos
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: ❗* Enter Some Message to Send Administrative*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var admin_chat = Bot.getProperty("adminID") 

var user_link = Libs.commonLib.getLinkFor(user)

/*msg = "Message from: " + user_link +
     "\n" +
      message +
     "\n/reply" + user.telegramid;
*/
var txt = "*📣 New Support Message Came From User* "+user_link+"\n\n"+message+""
Bot.sendInlineKeyboardToChatWithId(
  admin_chat, [{title:"↩️ Reply to "+user.first_name+"", command:"/reply "+user.telegramid+""}] , 
  txt
);


Api.forwardMessage({ 
 chat_id: admin_chat,
 from_chat_id: user.telegramid, 
 message_id: request.message_id
});


Bot.sendMessage("*Message was sent successfully you will get your reply shortly*");
