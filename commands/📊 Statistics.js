/*CMD
  command: 📊 Statistics
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /stat
  group: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")
var fullBotUsers = []
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
User.setProperty("already", user.telegramid, "text")}

if (stat == "ban") {
  Bot.sendMessage("*❌You are Banned to Use These Bot*")
} else {
  var mode = Bot.getProperty("mode")
  if (mode == "On") {
    Bot.sendMessage("*⚠️Bot Is Currently On Maintainace Mode Come Back Later.*")
  } else {
    if (request.data) {
      var message_id = request.message.message_id
      var chat_id = request.message.chat.id

      Api.deleteMessage({
        chat_id: chat_id,
        message_id: message_id
      })
    }
    let free = new Date().toLocaleString("en-US", {
      timeZone: "Asia/kolkata"
    })

    var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
    var tm = Libs.DateTimeFormat.format(free, "h:MM:ss T")
    var userpayment = ResLib.anotherChatRes("userpayment", "global")
    var status = ResLib.anotherChatRes("status", "global")
      .value()
      .toFixed(0)
    //var rn = Libs.Random.randomInt(1,30)
    //userPayment.add(rn)
    //var run = Libs.Random.randomInt(1,30)
    //status.add(run)
    //userPayment.add(-1000)
    var inl = [[{ text: "🔄 Refresh", callback_data: "📊 Statistics" }]]
    var text =
      "*📊 100% Live Accurate Statistics*\n\n\n🤵 *Total Members :* " +
      status +
      "\n\n*📑 Total Service Order :* " +
      userpayment.value().toFixed(0) +
      "\n\n*🔝Data for: (Today)\n📅 DATE:*_ " +
      dt +
      "_\n*⌚️ TIME:*_ " +
      tm +
      "M_"
    var Photo =
      "https://quickchart.io/chart?bkg=white&c={type:%27bar%27,data:{labels:[''],datasets:[{label:%27Total-Users%27,data:[" +
      status +
      "]},{label:%27Total-Services Ordered%27,data:[" +
      userpayment.value().toFixed(0) +
      "]}]}}"

    Api.sendPhoto({
      photo: Photo,
      caption: text,
      parse_mode: "Markdown",
      reply_markup: { inline_keyboard: inl }
    })
  }
}

