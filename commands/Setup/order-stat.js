/*CMD
  command: order-stat
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var od = User.getProperty("OrderID")
var r = JSON.parse(content)
var oid = r.status
var rem = r.remains
var st = r.start_count
if ((oid == undefined)) {
/*
  HTTP.get({
  url:
    "https://cheapestsmmpanels.com/api/v2?key=4cbac52068a9df766bfd4ee45ec17168&action=status&order=" +
    od +
    "",
  success: "st62x"
})
*/
Bot.sendMessage("ℹ️ Invalid Order Id")
} else {
  Bot.sendMessage("*🔍 Order Id Found\n\n\n✅ Order Status: " + oid + "\n\n🎀 Remains: " + rem + "\n\n📈 Start Count: "+ st +"*")
}

