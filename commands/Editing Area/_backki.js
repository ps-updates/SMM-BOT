/*CMD
  command: /backki
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Editing Area

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var jet = Bot.getProperty(params)
var name = jet.pname
var des = jet.description
var cost = jet.cost
var admin = jet.admin
var photot = jet.photoo
var photo = jet.pic
var minimum = jet.minimum
var adm = Bot.getProperty("admin_chat")
var p = params
var cur = Bot.getProperty("cur")
if (user.telegramid == adm) {
  var bold = [
    [
      {
        text: "🔰 Edit Scripts",
        callback_data: "/scripte " + p
      }
    ],
    [
      { text: "✅ Buy Now", callback_data: "/BuyFiles2004 " + p },
      { text: "✒️ Edit Price", callback_data: "/price " + p }
    ],
    [{ text: "🗑 Delete This Script", callback_data: "/delete " + p }],
    [
      { text: "✏️ Edit Des", callback_data: "/des " + p },
      { text: "🖋 Edit Name", callback_data: "/name " + p }
    ],
    [{ text: "📷 Change Pic", callback_data: "/pic " + p }]
  ]
} else {
  var bold = [
    [
      { text: "✅ Order Now", callback_data: "/BuyFiles2004 " + p },
      { text: "🎒 Add To Bag", callback_data: "/add_bag " + p }
    ],
    [{ text: "📈 View Status", callback_data: "/status " + p }]
  ]
}

  var thxt =
    "<b>🔰 Name:</> " +
      name +
      "\n\n<b>😷 Price:</> <code>" +
      cur +
      "" +
      cost +
      "</>/k<b>\n\n<b>✨ Minimum Order: </>" + minimum +"\n\n📃 Description:</> <i>" +
      des +
      "</>"

if (!photot || photot == "null") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: thxt,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: bold }
  })
} else {
  Api.editMessageCaption({
    message_id: request.message.message_id,
    caption: thxt,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: bold }
  })
}

