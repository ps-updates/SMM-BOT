/*CMD
  command: /rateus
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /feedback, ❤ rate
  group: 
CMD*/

var alreadysent = User.getProperty("alreadysent")
if (alreadysent) {
  Bot.sendMessage("_You Already Rated Thanks ❤️_")
  return
}
var button = [
  [{ title: "❤❤❤❤❤", command: "/rate  🌟 🌟 🌟 🌟 🌟" }],
  [{ title: "🧡🧡🧡🧡", command: "/rate  🌟  🌟 🌟 🌟" }],
  [{ title: "💚💚💚", command: "/rate🌟🌟🌟" }],
  [{ title: "💙💙", command: "/rate🌟🌟" }],
  [{ title: "🖤", command: "/rate🌟" }]
]

Bot.sendInlineKeyboard(
  button,

  "*🤝 Please Rate Us*"
)

