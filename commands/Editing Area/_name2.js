/*CMD
  command: /name2
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
  var rp = Bot.getProperty("changename")
var jet = Bot.getProperty(rp)
var name = message
var des = jet.description
var cost = jet.cost
var admin = jet.admin
var photot = jet.photoo
var photo = jet.pic
var minimum = jet.minimum
var sid = jet.sid

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
  text: "✅ <b>" + name + "'s Name Changed</> to " + name + "",
  parse_mode: "html"
})
} else {
  Bot.sendMessage("")
}

