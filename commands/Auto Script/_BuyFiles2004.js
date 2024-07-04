/*CMD
  command: /BuyFiles2004
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Auto Script

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var jet = Bot.getProperty(params)
var name = jet.pname
var php = jet.php
var infose = jet.description
var price = jet.cost
var minimum = jet.minimum
var sid = jet.sid
var api = jet.api
var p = User.getProperty("hell")
var admin = jet.admin
let np = price/1000
var key = Bot.getProperty("Chan")
var deposit = [[{ title: "✅ Deposit", command: "/deposit" }]]

var cur = Bot.getProperty("cur")
var key = Bot.getProperty("Chan")
var balance = ResLib.userRes("balance")
let pricex = price / minimum
if (balance.value() < pricex) {
  Api.sendPhoto({
  photo: "https://t.me/djmdumcsh/116", // it is picture!
  caption: "😢* You Don't Have Sufficient Fund To Order This Service*\n\n_🏦 Deposit ₹"+pricex+" To Order This Service._\n\n*You Have ₹"+balance.value()+"*",
parse_mode : "Markdown" ,


  reply_markup: { inline_keyboard: [
    [
      { text: "✅ Deposit Now", callback_data: "/deposit" }
    ]
  ]}
});
  return
}

//Bot.sendMessage("*⚠️ Currently Unavailable ⚠️*")
//let balance = Libs.ResourcesLib.userRes("balance")

//let pricex = price / minimum

if (balance.value() >= pricex) {
//Bot.sendMessage(""+api+"")
  User.setProperty("rate", price, "float")
  User.setProperty("sid", sid, "integer")
  User.setProperty("minimum", minimum, "float")
User.setProperty("apiurl", api)
  User.setProperty("serv", name)
//Bot.sendMessage(""+sid+"")
 Bot.runCommand("/stax")
}
