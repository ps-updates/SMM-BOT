/*CMD
  command: onBBPointIncome
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

//throw new Error(content)
let json = JSON.parse(content)
let cur_user = json.user

// Change this id to your ID.
// Use: Bot.sendMessage(user.telegramid)
let admin_tg_id = 5457085830
var cure = Bot.getProperty("cur")
var key = Bot.getProperty("Chan")

function sendMessage(text) {
  // user is not avaible here.
  // Only Api.sendMessage worked not Bot.sendMessage
  Api.sendMessage({
    chat_id: cur_user.telegramid,
    text: text
  })
}

// Security: user can change deep link!
if (json.transferred_to_tg_id != admin_tg_id) {
  return
}

// You can check amount also:
//var ranu = Libs.Random(["💶", "💴", " 💷"]);

var em = [
  { emj: "💷" },
  { emj: "💴" },
  //{emj:"💸"},
  { emj: "💶" }
]
var ranu = Math.floor(Math.random() * em.length)

var tt = (json.amount * 1) / 5
//var bon = Bot.getProperty("dep_offer")
//var tt = amou*parseFloat(bon)
Api.sendMessage({
  chat_id: cur_user.telegramid,
  text:
    "✅* BB Point Transferred Successfully*\n\n" +
    "" +
    em[ranu].emj +
    "* Amount:* " +
    json.amount +
    " *BB *💎 \n" +
    "\n➕* Balance Added:* +" +
    tt +
    "* " +
    cure +
    "*",
  parse_mode: "Markdown"
})
Api.sendMessage({
  chat_id: key,
  text:
    "*🚀 New Deposit Received 🚀\n━━━━━━━━━━━━━━━━━━\n👷User:* " +
    cur_user.telegramid +
    "\n*💲Amount:* " +
    json.amount +
    " *BB Point\n➕ Balance Added:* " +
    tt +
    " *" +
    cure +
    "*\n━━━━━━━━━━━━━━━━━━\n*➡️ Deposit Again @" +
    bot.name +
    "*",
  parse_mode: "markdown"
})
var user = { telegramid: cur_user.telegramid }
let balance = Libs.ResourcesLib.anotherUserRes("balance", cur_user.telegramid)
balance.add(tt)
//var depo = Libs.ResourcesLib.anotherChatRes("deposit", "global")
//var deposit   = Libs.ResourcesLib.userRes("deposit");
//depo.add(amount)
//deposit.add(tt)

// see all data in json

// see all data in json:
/* 
Api.sendMessage({
  chat_id: cur_user.telegramid,
  text: content
})
*/
//throw new Error(content)

