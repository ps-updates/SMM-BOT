/*CMD
  command: 👤 Account Information
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Details

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🆔 account info, 👤 account, /account
  group: 
CMD*/

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*❌You are Banned to Use These Bot*")
} else {
  var mode = Bot.getProperty("mode")
  if (mode == "On") {
    Bot.sendMessage(
      "*⚠️Bot Is Currently On Maintenance Mode. Come Back Later.*"
    )
  } else {
    if (request.data) {
      var message_id = request.message.message_id
      var chat_id = request.message.chat.id

      Api.deleteMessage({
        chat_id: chat_id,
        message_id: message_id
      })
    }
    const level = ResLib.userRes("level")
    let cur = Bot.getProperty("cur")
    const per = ResLib.userRes("per")
    let balance = ResLib.userRes("balance")
    var phpsbuy = ResLib.userRes("phpsbuy")
    let acc = "Free"
    let lib = RefLib
    let reflist = lib.refList

    if (reflist) {
      reflist = reflist.get()
    } else {
      // Handle the case where reflist is undefined
      reflist = 0 // Set it to 0 or any default value you want
    }

    let tgid = user.telegramid
    let button = [
      [{ text: "✨ Transfer Balance", callback_data: "/t_o_bal" }],
      [
        { text: "📃 History", callback_data: "/history" },
        { text: "➕ Deposit", callback_data: "/deposit" }
      ],
      [{ text: "❤ Rate Us", callback_data: "/rateus" }]
    ]

    Api.sendPhoto({
      photo: "https://t.me/djmdumcsh/94",
      caption:
        "👤 *Name :* `" +
        user.first_name +
        "`\n*🆔 User ID :* `" +
        tgid +
        "`\n\n*💵 Balance:* `" +
        balance.value().toFixed(2) +
        "` *" +
        cur +
        "\n👨‍👦‍👦 Total Referral :* " +
        reflist +
        " *User*\n\n⚔️ *Level :* " +
        level.value() +
        "/1000 *Completed*\n*📚 Total Service Ordered :* " +
        phpsbuy.value() +
        " ",
      parse_mode: "Markdown",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: button }
    })
  }
}

