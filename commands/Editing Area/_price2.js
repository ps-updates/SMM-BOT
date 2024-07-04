/*CMD
  command: /price2
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
  if (message == "/free") {
    var ph = "0.001"
  } else {
    function isNumeric(n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    }

    if (!isNumeric(message)) {
      Bot.sendMessage("➕ Enter A Numeric Value")
      Bot.runCommand("/price2")
      return
    }
    var ph = message
  }
  var rp = Bot.getProperty("changeprice")
  var jet = Bot.getProperty(rp)
  var name = jet.pname
  var des = jet.description
  var cost = ph
  var admin = jet.admin
  var minimum = jet.minimum
  var photot = jet.photoo
  var photo = jet.pic
  var php = jet.php
  var type = jet.type
  var fix = jet.fix
  var minimum = jet.minimum
  var sid = jet.sid

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
    text: "✅ <b>" + name + "'s Price Changed</> to " + cost + " ₹",
    parse_mode: "html"
  })
} else {
  Bot.sendMessage("")
}

