/*CMD
  command: /upi
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.editMessageCaption({
  message_id: User.getProperty("dep"),
  caption: "<b>💜 Send Transaction Order ID </>",
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/deposit" }]]
  }
})
Bot.runCommand("/UPI2")
