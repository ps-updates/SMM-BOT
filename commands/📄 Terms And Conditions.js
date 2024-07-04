/*CMD
  command: 📄 Terms And Conditions
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

var wb = User.getProperty("accept")
if (wb == undefined) {
  var tto = `_You people know that people spend a lot of money to make their own website, but you can make your own website by buying the cheapest_ *Script* _from it._

*Our bot is 100% safe, and we do not cheat with anyone.*

_If you need more information contact the owner_ *@ExpertCoder1*`
  var inkey = [
    [
      { text: "✅ Accept", callback_data: "/acceptt" },
      { text: "❌ Decline", callback_data: "/decline" }
    ]
  ]
  Api.sendPhoto({
    photo: "https://i.ibb.co/TqndLGL/file-331.jpg",
    is_reply: true,
    caption: tto,
    parse_mode: "markdown",
    disable_web_page_preview: true,
    reply_markup: { inline_keyboard: inkey }
  })
} else {
  Bot.sendMessage(
    "*✅ You Already Accepted Terms And Conditions, You Can Use Bot Easily*",
    { is_reply: true }
  )
}

