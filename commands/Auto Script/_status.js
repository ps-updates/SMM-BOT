/*CMD
  command: /status
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

var jet = Bot.getProperty(params)
var name = jet.pname
var des = jet.description
var cost = jet.cost
var admin = jet.admin
var photot = jet.photoo
var photo = jet.pic
var del = jet.delete

var cur = Bot.getProperty("cur")
var b = Libs.ResourcesLib.anotherUserRes("tviews", params)
var bavs = Libs.ResourcesLib.anotherUserRes("stotalp", params)
b.add(1)

  var tto =
    "<b>📈 View Script Statistics\n\n🔰 Name:</> " +
    name +
    "\n<b>💴 Price:</> " +
    cost +
    " <b>" +
    cur +
    "</>\n\n<b>🛍️ Total Purchase:</> " +
    bavs.value() +
    "\n👁‍🗨<b> Total Visitors:</> " +
    b.value() +
    ""

var bold = [
  [
    { text: "✅ Order Now", callback_data: "/BuyFiles2004 " + params },
    { text: "🔙 Back", callback_data: "/backki " + params }
  ]
]

if (!photot || photot == "null") {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: tto,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: bold }
  })
} else {
  Api.editMessageCaption({
    message_id: request.message.message_id,
    caption: tto,
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: bold }
  })
}

