/*CMD
  command: /delete2
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

var ad = Bot.getProperty("admin_chat")
if (user.telegramid == ad) {
  var jet = Bot.getProperty(params)
  var name = jet.pname
  var des = jet.description
  var cost = jet.cost
  var admin = jet.admin
  var photot = jet.photoo
  var photo = jet.pic
  var php = jet.php
  var type = null

  var tto = "*😔 Your Script* " + name + " *Has Been Deleted By Admin*"
  var ty = [{ title: "📞 Take Support", command: "/support" }]
  var jjson = {
    cost: cost,
    description: des,
    type: type,
    pname: name,
    delete: true,
    php: php,
    photoo: photot,
    
    admin: admin
  }
  Bot.setProperty(params, jjson)
  if (request.data) {
    var message_id = request.message.message_id
    var chat_id = request.message.chat.id

    Api.deleteMessage({
      chat_id: chat_id,
      message_id: message_id
    })
  }
  Bot.sendMessage("*" + name + "* _Has Been Deleted From Store_")
  Bot.sendInlineKeyboardToChatWithId(admin, ty, tto)
} else {
  Bot.sendMessage("")
}

