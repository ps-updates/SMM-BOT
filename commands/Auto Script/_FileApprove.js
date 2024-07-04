/*CMD
  command: /FileApprove
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

var adm = Bot.getProperty("admin_chat")
if (user.telegramid == adm) {
  if (!params) {
  Bot.sendMessage("Failed to Get Attributes for Adding Script")
  return
}
  var lap = Bot.getProperty(params)
  if (!lap) {
    Bot.sendMessage("approval id not valid")
    return
  }

  var type = Bot.getProperty(lap.type, [])
  var cost = lap.cost
  var t = lap.type
  var des = lap.description
  var name = lap.pname
  var ad = lap.admin
  var pho = lap.photoo
  var adda = lap.admin
  var minimum = lap.minimum
  var sid = lap.sid
  var api = lap.api
  type.push(params)
  Bot.setProperty(lap.type, type, "json")
  if(!request.message) {
}else{
Bot.editInlineKeyboard([[{title:"💛 Seller of Bot", url:"tg://user?id="+adda+""}]], request.message.message_id)
}
Bot.sendMessage("Approved Success\n\nFile Added In Store")
  let cur = Bot.getProperty("cur") 
  var key = "@smmbazarr"
  let bal = Libs.ResourcesLib.anotherUserRes("TotalScript", ad)
  bal.add(1)
  if (!pho || pho == "null") {
    Api.sendPhoto({
      chat_id: key,
      photo: "https://t.me/djmdumcsh/80",
      caption:
        "<b>🎉New Script Added In Our Store\n\n❤️ Service Name :</> " +
        name +
        " \n \n<b>💵 Price :</> " +
        cost +
        " <b>"+cur+"</>\n\n <b>📜 Service Info :</> <i>" +
        des +
        "</> \n\n <b>🔭 Category:</> <i>" +
        t +
        "</> \n\n <b>🤩 Get The Bot Now From Here\n➡️ @" +
        bot.name +
        "</b>",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [{ text: "⭐️ Check Out", url: "https://t.me/" + bot.name + "" }]
        ]
      }
    })
  } else {
    Api.sendPhoto({
      chat_id: key,
      photo: pho,
      caption:
        "<b>🎉New Service Added In Our Store \n\n❤️ Service Name :</> " +
        name +
        " \n \n<b>💵 Price :</>"+cur+" " +
        cost +
        "<b>/k</>\n\n <b>📜 Service Info :</> <i>" +
        des +
        "</> \n\n<b>☄️ Minimum Order : "+minimum+"</>\n\n <b>🔭 Category:</> <i>" +
        t +
        "</> \n\n <b>🚀 Boost Your Social Media Accounts From Here\n➡️ @" +
        bot.name +
        "</b>",
      parse_mode: "html",
      reply_markup: {
        inline_keyboard: [
          [{ text: "😷 Check Out", url: "https://t.me/" + bot.name + "" }]
        ]
      }
    })
  }
  Api.sendMessage({
    chat_id: ad,
    text: "*❤️ Your Script* " + name + " *Successful  Approved By Admin*",
    parse_mode: "markdown"
  })
} else {
  Bot.sendMessage("")
}

