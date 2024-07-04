/*CMD
  command: /main#menu
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: m, 🔙 back
  group: 
CMD*/

if (request.data) {
  var message_id = request.message.message_id
  var chat_id = request.message.chat.id

  Api.deleteMessage({
    chat_id: chat_id,
    message_id: message_id
  })
}
var refAmount = parseFloat(0.05) //Per Refer Amount You want to Add to Referrer
var userStat = User.getProperty("userStatus")

if (!userStat | (userStat == "left")) {
  Bot.runCommand("/start")
  return
} else if (
  (userStat == "member") |
  (userStat == "administrator") |
  (userStat == "creator")
) {
  var referCount = User.getProperty("ReferStatus")
  if (referCount == undefined) {
    let refUser = RefLib.getAttractedBy()
    if (refUser) {
      var refbal = ResLib.anotherUserRes("balance", refUser.telegramid)
      refbal.add(refAmount)
      Api.sendMessage({
        chat_id: refUser.telegramid,
        text:
          "❤️<b> Your Referral Joined Our Channel</b>\n➕ " +
          refAmount +
          " <b>₹ Added</b>",
        parse_mode: "html"
      })
      User.setProperty("ReferStatus", "valid", "string")
    }
  }

  Bot.sendKeyboard(
    "👤 Account,💎 Get Funds\n🔥 Order,🎒 My Bag,📞 Support\n♻️ Refill,🔍 Track\n❤️‍🔥 More",
    "*⚡️ Welcome To Our Smm Bot.*"
  )
}

