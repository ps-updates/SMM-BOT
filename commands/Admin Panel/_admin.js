/*CMD
  command: /admin
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var ai2 = Bot.getProperty("adminID")
if (user.telegramid == ai2) {
  var bot = [
    [
      { text: "⚙ Main Settings", callback_data: "/main_settings" },
      { text: "👨‍🦱 User Settings", callback_data: "/user_settings" }
    ],
    [{ text: "🤖 Bot Settings", callback_data: "/bot_settings" }],
    [
      { text: "📡 Mass Settings", callback_data: "/mass_settings" },
      { text: "💱 Deposit Settings", callback_data: "/dep_settings" }
    ],
    [{ text: "🎉 Add Service", callback_data: "/addserv" }]
  ]
  var up =
    "*👋 Hello Admin, Welcome to Settings Panel*\n_Choose Something from below Options_"

  if (request.message_id) {
    Api.sendMessage({
      text: up,
      parse_mode: "markdown",
      disable_web_page_preview: true,
      reply_markup: { inline_keyboard: bot }
    })
    return
  }
  Api.editMessageText({
    message_id: request.message.message_id,
    text: up,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: bot }
  })
} else {
  Bot.sendMessage(" ")
}

