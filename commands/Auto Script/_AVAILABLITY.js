/*CMD
  command: /AVAILABLITY
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Auto Script

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 🌺 lifafa, ➕ more, 🎃 extra, 🍭 campaign, 🌸 cryptos, 🤖 bots, 🎮 game, 🎛 panel, 💥 other, 🖤 plp, ❤️‍🔥 logo
  group: 
CMD*/

let oke = message.split(" ")
let sara = oke[1]
let json = Bot.getProperty(sara)
if (!json) {
  Bot.sendMessage("*🏪 No Script Available At This Section*")
  return
}
var fullBotUsers = Bot.getProperty("wholeUsers", [])
var already = User.getProperty("already")
if (!already) {
  fullBotUsers.push(user.telegramid)
  Bot.setProperty("wholeUsers", fullBotUsers, "json")
  User.setProperty("already", user.telegramid, "text")
}
var adm = Bot.getProperty("admin_chat")
let cur = Bot.getProperty("cur")
for (var i in json) {
  var jet = Bot.getProperty(json[i])
  var name = jet.pname
  var des = jet.description
  var cost = jet.cost
  var admin = jet.admin
  var photot = jet.photoo
  var photo = jet.pic
  var del = jet.delete
  
  if (user.telegramid == adm) {
    var bold = [
      [
        {
          text: "🔰 Edit Scripts",
          callback_data: "/scripte " + json[i]
        }
      ],
      [
        { text: "✅ Buy Now", callback_data: "/BuyFiles2004 " + json[i] },
        { text: "✒️ Edit Price", callback_data: "/price " + json[i] }
      ],
      [{ text: "🗑 Delete This Script", callback_data: "/delete " + json[i] }],
      [
        { text: "✏️ Edit Des", callback_data: "/des " + json[i] },
        { text: "🖋 Edit Name", callback_data: "/name " + json[i] }
      ],
      [{ text: "📷 Change Pic", callback_data: "/pic " + json[i] },{ text: "🌐 Change Api", callback_data: "/apic " + json[i] }]
    ]
  } else {
    var bold = [
      [
        { text: "✅ Buy", callback_data: "/BuyFiles2004 " + json[i] },
        { text: "🎒 Add To Bag", callback_data: "/add_bag " + json[i] }
      ],
      [{ text: "📈 View Status", callback_data: "/status " + json[i] }]
    ]
  }
  
    var thxt =
      "<b>🔰 Name:</> " +
      name +
      "\n\n<b>😷 Price:</> <code>" +
      cost +
      "</> <b>" +
      cur +
      "\n\n📃 Description:</> <i>" +
      des +
      "</>"

  if (del == true) {
  } else {
    if (!photot || photot == "null") {
      Api.sendMessage({
        text: thxt,
        parse_mode: "html",
        disable_web_page_preview: true,
        reply_markup: { inline_keyboard: bold }
      })
    } else {
      Api.sendPhoto({
        photo: photot,
        caption: thxt,
        parse_mode: "html",
        disable_web_page_preview: true,
        reply_markup: { inline_keyboard: bold }
      })
    }
  }
}

