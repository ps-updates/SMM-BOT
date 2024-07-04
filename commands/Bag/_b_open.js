/*CMD
  command: /b_open
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Bag

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var fullBag = User.getProperty("ScriptsBag")
//Bot.sendMessage(fullBag)

var s = ResLib.userRes("bagitems")
var ism = ResLib.userRes("bagbitems").value()
var iss = s.value() - ism //Libs.ResourcesLib.userRes("bagcitems")
//   .value()

if (!fullBag) {
  Bot.sendMessage(
    "📚* Your Bag is Empty!! *\nClick *🎒Add to Bag* Button below item to Add in Your Bag."
  )
} else if (fullBag == "") {
  Bot.sendMessage(
    "📚 *Your Bag is Empty!! *\nClick *🎒Add to Bag* Button below item to Add in Your Bag."
  )
} else
  for (var index in fullBag) {
    var info = fullBag[index].name

    var jet = Bot.getProperty(info)
    var cur = Bot.getProperty("cur")
    var nn = jet.pname
    var des = jet.description
    var cost = jet.cost
    var admin = jet.admin
    var photot = jet.photoo
    var photo = jet.pic
    var del = jet.delete

    let bold = [
      [
        { text: "✅ Buy Now", callback_data: "/BuyFiles2004 " + info },
        { text: "❎ Remove from Bag", callback_data: "/rc_bag " + info }
      ]
    ]

    var thxt =
      "<b>🔰 Name:</> " +
      nn +
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

