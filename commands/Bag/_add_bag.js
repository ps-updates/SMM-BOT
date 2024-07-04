/*CMD
  command: /add_bag
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

var fullBag = User.getProperty("ScriptsBag", [])
var dev = params
var result = {
  name: dev
}
for (var index in fullBag) {
  var item = fullBag[index].name
  if (item == result.name) {
    var filteredData = "Already"
  }
}
var jet = Bot.getProperty(dev)
var name = jet.pname
if (filteredData == "Already") {
  Bot.sendMessage("📦 Seems like Item Already Exists in Your Bag! ")
  return
}
var jsonData = {}
jsonData.name = result.name
fullBag.push(jsonData)
User.setProperty("ScriptsBag", fullBag, "json")

var ism = ResLib.userRes("bagcitems")
ism.add(1)

var s = ResLib.userRes("bagitems")
s.add(1)

Bot.sendInlineKeyboard(
  [{ title: "🎒View Bag", command: "🎒 My Bag" }],
  "🎒*1 Item* ([" +
    name +
    "])* Added to Bag!!* \n\n*🗄 Total Items Available in Bag : " +
    s.value() +
    " item(s) *"
)

