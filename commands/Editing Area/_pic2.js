/*CMD
  command: /pic2
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
  if (message == "/null") {
    var ph = "null"
  } else {
    var ph = request.photo[0].file_id
  }

  var rp = Bot.getProperty("changepic")
  var jet = Bot.getProperty(rp)
  var name = jet.pname
  var des = jet.description
  var cost = jet.cost
  var admin = jet.admin
  var photot = ph
  var photo = jet.pic
  var minimum = jet.minimum
  var sid = jet.sid


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
  if (message == "/null") {
    Bot.sendMessage("*Photo Changed Of " + name + "*")
  } else {
    Api.sendPhoto({
      photo: ph,
      caption: "✅ <b>" + name + "'s Photo Changed</>",
      parse_mode: "html"
    })
  }
} else {
  Bot.sendMessage("")
}

