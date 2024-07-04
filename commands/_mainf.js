/*CMD
  command: /mainf
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

var userstat = User.getProperty("status")
var referbonus = User.getProperty("referbonus")

/*if (
  userstat == "member" ||
  userstat == "administrator" ||
  userstat == "creator"
)*/ {
  if (referbonus == undefined) {
    let refUser = RefLib.getAttractedBy()
    if (refUser) {
      var balanceref = Libs.ResourcesLib.anotherUserRes(
        "balance",
        refUser.telegramid
      )
      balanceref.add(1500)

      let free = new Date().toLocaleString("en-US", {
        timeZone: "Asia/Dhaka"
      })

      var dt = Libs.DateTimeFormat.format(free, "dd/mm/yyyy")
      var tm = Libs.DateTimeFormat.format(free, "h:MM:ss T")
      Api.sendPhoto({
        photo: "https://t.me/All_Bot_Devoloper_Group/356",
        chat_id: "@All_Bot_Pay_Request",
        caption:
          "<a href='tg://user?id=" +
          refUser.telegramid +
          "'>" +
          refUser.first_name +
          "</a> <b>Has Been Invited New User</b>\n\n<b>👩‍💻 User Name:</b> <a href='tg://user?id=" +
          user.telegramid +
          "'>" +
          user.first_name +
          "</a> \n\n<b>🆔 Telegram Id:</b> <code>" +
          user.telegramid +
          "</code>\n\n<b>💕 Invite Date:</b> " +
          dt +
          "\n\n<b>💰 Balance Added: </b>1500 <b>Coins 💎</b>",
        parse_mode: "HTML"
      })

      User.setProperty("referbonus", "valid", "string")
      if (refUser.chatId) {
        Bot.sendMessageToChatWithId(
          refUser.chatId,
          "_You have received 1500 Points from " + user.first_name + "_"
        )
      }
    }
  }

  var balance = Libs.ResourcesLib.userRes("balance")
  var withdrawn = Libs.ResourcesLib.userRes("withdrawn")
  var ref = Libs.ResourcesLib.userRes("referral")
  var keyboard = [
    [
      { text: "👁‍🗨 Order Telegram View" },
      { text: "👁‍🗨 Order Tik Tok Views" },
      { text: "❤️‍🔥 Tik Tok - 𝕭est Post Like" }
    ],
    [{ text: "👍 Order Telegram Reactions" }, { text: "More Service ➲" }],
    [{ text: "👤 My Account" }, { text: "💎 Coin Pricing 💎" }],
    [{ text: "🗣 Invite Friends" }, { text: "🎉 Bonus" }],
    [{ text: "🎰 𝗟𝗨𝗖𝗞 𝗥𝗢𝗬𝗔𝗟" }, { text: "More Button ➲" }],
    [{ text: "Live Support 💬" }, { text: "🛠️ Update Bot 🛠️" }]
  ]
  Api.sendVideo({
    video: "https://graph.org/file/22ea144fe6d607df8bbf6.mp4",
    caption: "*🏘 Main Menu\n\nThis bot is fully powered by @onykhan*",
    parse_mode: "Markdown",
    reply_markup: {
      keyboard: keyboard,
      resize_keyboard: true // for big buttons
    }
  })
  /*Bot.sendKeyboard(
    "👁‍🗨 Order Telegram View,👁‍🗨 Order Tik Tok Views,❤️‍🔥 Tik Tok - 𝕭est Post Like,\n👍 Order Telegram Reactions,More Service ➲,\n👤 My Account,💎 Coin Pricing 💎,\n🗣 Invite Friends,🎉 Bonus,\n🎰 𝗟𝗨𝗖𝗞 𝗥𝗢𝗬𝗔𝗟,More Button ➲,\nLive Support 💬,🛠️ Update Bot 🛠️",
    "🏘 Main Menu\n\n*This bot is fully powered by @onykhan*"
  )*/
}
/*if (userstat == "left") {
  Bot.runCommand("/start")
}*/

