/*CMD
  command: /scripte2
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
  var rp = Bot.getProperty("changesceipt")
  var jet = Bot.getProperty(rp)
  var name = jet.pname
  var des = jet.description
  var cost = jet.cost
  var admin = jet.admin
  var photot = jet.photoo
  var photo = jet.pic
  var sid = jet.sid
  var minimum = message
  var type = jet.type
  var jjson = {
    cost: cost,
    description: des,
    sid: sid,
    type: type,
    //  photo: pic,
    pname: name,
    minimum: minimum,
    photoo: photot,
    admin: admin
  }

  Bot.setProperty(rp, jjson)
  Api.sendMessage({
    text: "✅ <b>" + name + "'s Script Changed</>",
    parse_mode: "html"
  })
} else {
  Bot.sendMessage("")
}

