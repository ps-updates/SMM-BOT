/*CMD
  command: /dep_offer
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: *💸 Send the × of deposit bonus*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
if(user.telegramid != adm) {
  Bot.sendMessage("Can't Do That! ") 
  return
}
function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}
var value = message
if (!isNumeric(value)) {
  Bot.sendMessage("*📛 Invaild value. Enter only numeric value. Try again*", {
    is_reply: true
  })
  return
}
Bot.setProperty("dep_offer",message,"float")
Bot.sendMessage("💞 Deposit Bonus offer set to "+message+"×")

let key = Bot.getProperty("Chan")
if (message > 1) {
  var fg =
    "*🛡 Crypto Offer Activated 🛡\n━━━━━━━━━━━━━━━━━━\n🤩 Deposit Through Crypto >>* _And Get " +
    message +
    " × Amount!! _\n\n*⚠ Note:* _If You Deposit In Offer Then You'll Get Always More Than Without Offer Deposit,Always Try To Deposit More Money In Offer.._\n*And Don't Miss This Offer And Don't Mute This Channel For Get Now Notifications\n━━━━━━━━━━━━━━━━━━\n➡️ Grab Here @" +
    bot.name +
    "*"
  Api.sendMessage({
    chat_id: key,
    text: fg,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [{ text: "🎶 Grab Now", url: "https://t.me/" + bot.name }]
      ]
    }
  })
  return
}

