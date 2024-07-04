/*CMD
  command: /bb_de
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Deposit
  answer: *Enter Amount How Much You Want To Deposit*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var value = message
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var cur = Bot.getProperty("cur") 
  var tp =
  "https://t.me/BBPointBot?start=req1553-"+message+"-points-to-5457085830"
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
  //Bot.run({
  // command: "/payBB"
  //})
  return
} else if (message < 5) {
  Bot.sendMessage("*Minimum Exchange is 5 BB💎*")
  return
} else User.setProperty("bb", tp)
//Bot.run({command:""
//})
var bon = Bot.getProperty("bb_offer")
if(!bon){
  var bon = "1"
}

var tpp = message * 1/5
var ta = tpp*parseFloat(bon)

var button = [{ title: "Pay", url: tp }]
Bot.sendInlineKeyboard(
  button,
  "*Your Payment Link is Ready, You have to Pay* " +
    message +
    "* BB💎*"+
    "\n\n" +
    "_ You will Get " +
    ta+
    " "+cur+"" +
    "_"
)
