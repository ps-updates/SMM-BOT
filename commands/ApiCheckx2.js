/*CMD
  command: ApiCheckx2
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

// Delete the incoming message (if any)
if (request.data) {
  var message_id = request.message.message_id;
  var chat_id = request.message.chat.id;

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}

var balance = ResLib.userRes("balance");

var rt = User.getProperty("rate");
var mrt = User.getProperty("mrate");
var seid = User.getProperty("sid");
var post = User.getProperty("post");
var tv = User.getProperty("tv");
var url = User.getProperty("apiurl");

var val = tv / 1000;
var vall = val * rt;
var myprof = val * mrt;
User.setProperty("charge", vall);
if (balance.value() >= vall) {
  balance.add(-vall);
  HTTP.get({
    url:
      "" + url + "&action=add&service=" +
      seid +
      "&link=" +
      post +
      "&quantity=" +
      tv +
      "",
    success: "api26"
  });
  Bot.sendMessage("✅ Payment successful!");
} else {
  Bot.sendMessage("*⚠️ INSUFFICIENT MONEY ⚠️");
}
