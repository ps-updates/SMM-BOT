/*CMD
  command: bb
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Api.sendPhoto({
    photo: "https://t.me/All_Bot_Devoloper_Group/345",
    caption: "You're Ban This Bot ❌ Please Contract Admin @onykhan"
  })
} else {
  var maintenanceStatus = Bot.getProperty("maintenanceStatus")

  if (maintenanceStatus === "On") {
    var onText =
      "<b>🛠️ Bot is Under Maintenance, Please Come Back After Some Time. Any Poblem @onykhan Only Bot Help Support ⚠️</b>"

    Api.sendPhoto({
      photo: "https://t.me/All_Bot_Devoloper_Group/350",
      caption: onText,
      parse_mode: "html"
    })
    return
  }

  function canRun() {
    var last_run_at = User.getProperty("last_run_at")
    if (!last_run_at) {
      return true
    }

    var minutes = (Date.now() - last_run_at) / 1000 / 60

    var minutes_in_day = 24 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      if (request.message_id) {
        Api.deleteMessage({
          chat_id: chat.chatid,
          message_id: request.message_id
        })
      }
      Bot.sendMessage(
        "*📛 You have already received a bonus Today\n\n▶️ Come Back After ⏳ " +
          wait_hours +
          " h " +
          wait_minutes +
          " m " +
          seconds +
          " s*"
      )
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  User.setProperty("last_run_at", Date.now(), "integer")

  let bonus = Libs.Random.randomInt(600, 700)
  let balance = Libs.ResourcesLib.userRes("balance")
  balance.add(+bonus)
  if (request.message_id) {
    Api.deleteMessage({ chat_id: chat.chatid, message_id: request.message_id })
  }
  Api.sendPhoto({
    photo: "https://t.me/All_Bot_Pay_Request/4328",
    caption:
      "*🎉 Congratulations , You Got " +
      bonus +
      " Points\n\n💌 Now You Can Order Services\n\n🎁 Claim Bonus Again in 24 Hours*",
    parse_mode: "Markdown"
  })
  var inlineKeyboard = [
    [
      {
        text: "🎉 𝘾𝙡𝙖𝙞𝙢 𝘽𝙤𝙣𝙪𝙨",
        url: "https://t.me/Demo_1_views_bot?start=bonus"
      }
    ]
  ]

  Api.sendPhoto({
    photo: "https://t.me/All_Bot_Devoloper_Group/353",
    chat_id: "@All_Bot_Pay_Request",
    caption:
      "*🥳 New User Claimed Bonus 🥳  \n\n👤 Name:* [" +
      user.first_name +
      "](tg://user?id=" +
      user.telegramid +
      ")\n*🆔 User ID = " +
      user.telegramid +
      "\n👁️‍🗨️ Amount = " +
      bonus +
      " Points\n\n👮🏻‍♂ Bot = @" +
      bot.name +
      "*",
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inlineKeyboard }
  })
}

