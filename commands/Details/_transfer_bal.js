/*CMD
  command: /transfer_bal
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Details

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var splt = params.split("-")
var usid = splt[0]
var am = splt[1]
var bal = ResLib.userRes("balance")
if (bal.value() < "" + am + "" && am != "0") {
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: "❕ You Have Not Enough Balance.",
    show_alert: true
  })
  return
}
var us = Bot.getProperty("Chat" + usid, null)
var cur = Bot.getProperty("cur")
var adm = Bot.getProperty("adminID")
bal.add(-am)
ResLib.anotherUserRes("balance", usid).add(+am)
var inff = "<a href='tg://user?id=" + usid + "'>" + us.user.first_name + "</>"
var ttt = "✅ <b>" + inff + " Has Been Got Balance.</>"
Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: ttt,
  parse_mode: "html",
  reply_markup: {
    inline_keyboard: [[{ text: "⬆️ Return", callback_data: "/t_o_bal" }]]
  }
})
Api.sendMessage({
  chat_id: usid,
  text:
    "👤 <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</> <b>Has Sended You " +
    am +
    " " +
    cur +
    " </>",
  parse_mode: "html"
})
Api.sendMessage({
  chat_id: adm,
  text:
    "👤 <a href='tg://user?id=" +
    user.telegramid +
    "'>" +
    user.first_name +
    "</> <b>Has Sended Balance To " +
    inff +
    " > " +
    am +
    " " +
    cur +
    " </>",
  parse_mode: "html"
})
