/*CMD
  command: /rc_bag
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Bag

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!params) {
  return
}

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

 Api.deleteMessage({
    message_id: message_id,
    chat_id: chat_id
  })
}
var fullBag = User.getProperty("ScriptsBag", [])

for (var index in fullBag) {
  var uniqueid = fullBag[index].name
  if (uniqueid == params) {
    fullBag.splice(parseInt(index), 1)

    var s = ResLib.userRes("bagitems")
    s.add(-1)
    if (s.value() == 0) {
      User.setProperty("ScriptsBag", undefined)
    }
    var ism = ResLib.userRes("bagcitems")
    ism.add(-1)
    Bot.sendMessage(
      "🎒 Item Removed from Bag!! \nTotal Items in Bag : " + s.value() + ""
    )
  } else {
    Bot.sendMessage("*❇️ Seems Like Item Already Removed! *")
  }
}

User.setProperty("ScriptsBag", fullBag, "json")

return

for (var index in fullBag) {
  var uniqueid = fullBag[index].params
  if (uniqueid != params) {
    fullBag.splice(parseInt(index), 1)

    var s = ResLib.userRes("itemsinbag")
    s.add(-1)
    if (s.value() == 0) {
      User.setProperty("BagC", undefined)
    }

    Bot.sendMessage(
      "🎒 Item Removed from Bag!! \nTotal Items in Bag : " + s.value() + ""
    )
  }
}

User.setProperty("BagC", fullBag, "json")

