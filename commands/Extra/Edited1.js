/*CMD
  command: Edited1
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Extra

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var perref = 0.05 // Amount User Gets Per Refer
let stat = Bot.getProperty("" + user.telegramid + "?Ban")

if (stat == "ban") {
  Bot.sendMessage("*You're Banned From Using The Bot ❌*")
  return
}
let msg_id = options.result.message_id
let chat_id = options.chat_id

// Define the length of the progress bar
const progressBarLength = 12
// Define the current progress levels (out of 100)
const progressLevels = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

// Initialize an array to store the progress bar messages
const progressMessages = []

// Iterate through each progress level and create a progress bar message
progressLevels.forEach(progress => {
  // Calculate the number of filled and empty blocks in the progress bar
  const filledBlocks = Math.round((progress / 100) * progressBarLength)
  const emptyBlocks = progressBarLength - filledBlocks

  // Create the progress bar string with filled and empty portions
  const progressBar = "▰".repeat(filledBlocks) + "▱".repeat(emptyBlocks)

  // Create the progress text
  const progressText = `${progress}%`

  // Create the message text with the progress bar
  const messageText = `${progressBar} ${progressText}`

  // Add the message to the array
  progressMessages.push(messageText)
})

// Use the progressMessages array to send multiple messages with different progress bars
progressMessages.forEach(text => {
  Api.editMessageCaption({
    chat_id: chat_id,
    message_id: msg_id,
    caption: text,
    parse_mode: "Markdown"
  })
})
let cur = Bot.getProperty("cur")
let invLink = Libs.ReferralLib.getRefLink("" + bot.name + "", "Bot")
var tto =
  "<b>🤑 Earn " +
  perref +
  " " +
  cur +
  " For New Referral\n\n🔥 Your Total Downlines: " +
  Libs.ReferralLib.getRefCount() +
  "\n\n👨‍👨‍👦 Referral Earning: " +
  Libs.ReferralLib.getRefCount() * 0.05 +
  " " +
  cur +
  "\n\n✅ Ref Link to share link with your friends: " +
  invLink +
  "</b>"
var inl = [
  [
    {
      text: "💐 Share On Telegram",
      url: "https://t.me/share/url?text=" + invLink
    }
  ],
  [{ text: "🍀 My Downline", callback_data: "/list" }],
  [{ text: "🏆 Top Downliner 🏆", callback_data: "/top" }]
]
var qrChartUrl =
  "https://chart.apis.google.com/chart?cht=qr&chs=250x250&" +
  "chl=" +
  invLink +
  "&chld=H|0"
Api.editMessageMedia({
  message_id: msg_id,
  media: {
    type: "photo",
    media: qrChartUrl
  }
})
Api.editMessageCaption({
  message_id: msg_id,
  caption: tto,
  parse_mode: "html",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
})

