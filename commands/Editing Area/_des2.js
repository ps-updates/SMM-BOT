/*CMD
  command: /des2
  help: 
  need_reply: true
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
  var rp = Bot.getProperty("changedes")
  var jet = Bot.getProperty(rp)
  var name = jet.pname
  var des = message
  var cost = jet.cost
  var admin = jet.admin
  var photot = jet.photoo
  var photo = jet.pic
  var sid = jet.sid
  var minimum = jet.minimum

  var type = jet.type
  var jjson = {
    cost: cost,
    description: des,
    
    type: type,
    sid: sid,
    pname: name,
    minimum: minimum,
    photoo: photot,
    admin: admin
  }

  Bot.setProperty(rp, jjson)
  Api.sendMessage({
    text: "✅ <b>" + name + "'s Description Changed</> to " + des + "",
    parse_mode: "html"
  })
} else {
  Bot.sendMessage("")
}

