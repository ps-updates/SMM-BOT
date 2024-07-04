/*CMD
  command: /stax
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Buy Service

  <<ANSWER
*➡️ Enter Quantity

» Minimum: <minimum>
» Maximum: 10000*
  ANSWER
  keyboard: 
  aliases: 
  group: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id;
  var chat_id = request.message.chat.id;

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  });
}

let mini = User.getProperty("minimum");

if (message < mini) {
  Bot.sendMessage("*Minimum " + mini + "*");
Bot.runCommand(""+command.name+"");
} else {
  User.setProperty("tv", message);
  Bot.runCommand("tg22x");
}

