/*CMD
  command: 📥 Add Funds
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /deposit, 💱 add fund, 💎 get funds
  group: 
CMD*/

var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
  User.setProperty("already", user.telegramid, "text")
}
var bonuB = Bot.getProperty("bb_offer", 1)
var bonu = Bot.getProperty("dep_offer", 1)
var BonuP = Bot.getProperty("paytm_offer", 1)
let cur = Bot.getProperty("cur")
var pp = 1 * BonuP
var bb = 1 * bonuB
var tt = 4 * bonu
if (BonuP > 1) {
  var oo =
    "<b>🤩 Offer Active »</> <i>Deposit through paytm and Get ×" +
    BonuP +
    " Amount!! </>"
} else {
  var oo = ""
}
if (bonu > 1) {
  var ofo =
    "<b>🤩 Offer Active »</> <i>Deposit through TRX and Get ×" +
    bonu +
    " Amount!! </>"
} else {
  var ofo = ""
}
if (bonuB > 1) {
  var oof =
    "<b>🤩 Offer Active »</> <i>Deposit through BB Point and Get ×" +
    bonuB +
    " Amount!! </>"
} else {
  var oof = ""
}
var tto = `<b>👋 Welcome!</>
Here You Can Add Funds To Your Balance!

<b>1 INR = ${pp} ${cur}
1 INR (UPI) = ${bb} ${cur}
</>
➕ Select Deposit Method, All deposits will be converted to <b>${cur}</>

${oo}
${ofo}
${oof}`

var inkey = [
  [
    { text: "✨ PAYTM", callback_data: "/paytm" },{ text: "⚡ UPI", callback_data: "/upiqr" }
  ]]

if (request.message_id) {
  Api.sendPhoto({
    photo: "https://i.ibb.co/SdyrRpq/file-22.jpg",
    caption: tto,
    parse_mode: "html",
    on_result: "/dep_msg",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inkey }
  })
  return
}

Api.editMessageMedia({
  message_id: request.message.message_id,
  media: {
    type: "photo",
    media: "https://i.ibb.co/SdyrRpq/file-22.jpg",
    caption: tto,
    parse_mode: "html"
  },
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inkey }
})
