/*CMD
  command: /t_o_bal
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

var but = [
  [
    { text: "1", callback_data: "/idnum 1" },
    { text: "2", callback_data: "/idnum 2" },
    { text: "3", callback_data: "/idnum 3" }
  ],
  [
    { text: "4", callback_data: "/idnum 4" },
    { text: "5", callback_data: "/idnum 5" },
    { text: "6", callback_data: "/idnum 6" }
  ],
  [
    { text: "7", callback_data: "/idnum 7" },
    { text: "8", callback_data: "/idnum 8" },
    { text: "9", callback_data: "/idnum 9" }
  ],
  [{ text: "0", callback_data: "/idnum 0" }],
  [{ text: "⬆️ Return", callback_data: "/account" }]
]

Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: "*🆔 Enter Your Friend Telegram ID*",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: but }
})
