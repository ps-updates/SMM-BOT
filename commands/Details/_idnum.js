/*CMD
  command: /idnum
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

var ll = params.length

if (ll == 1) {
  var com = "/t_o_bal"
} else {
  var can = params.slice(0, parseInt(ll - 1))
  var com = "/idnum " + can
}
var but = [
  [
    { text: "1", callback_data: "/idnum " + params + "1" },
    { text: "2", callback_data: "/idnum " + params + "2" },
    { text: "3", callback_data: "/idnum " + params + "3" }
  ],
  [
    { text: "4", callback_data: "/idnum " + params + "4" },
    { text: "5", callback_data: "/idnum " + params + "5" },
    { text: "6", callback_data: "/idnum " + params + "6" }
  ],
  [
    { text: "7", callback_data: "/idnum " + params + "7" },
    { text: "8", callback_data: "/idnum " + params + "8" },
    { text: "9", callback_data: "/idnum " + params + "9" }
  ],
  [
    { text: "⌫", callback_data: com },
    { text: "0", callback_data: "/idnum " + params + "0" },
    { text: "🔍 Find User", callback_data: "/find_us " + params + "-1" }
  ]
]

Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: "*🆔 Enter Your Friend Telegram ID*\n\n" + params + "",
  parse_mode: "markdown",
  reply_markup: { inline_keyboard: but }
})
