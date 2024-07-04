/*CMD
  command: /onAppinfo
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

var Data = JSON.parse(content)

var Name = Data.name
var Id = Data.id
var Category = Data.category
var Type = Data.type
var Developer = Data.developer
var Summary = Data.summary
var Description = Data.description

var Installs = Data.installs
var age = Data.age
var ads = Data.ads
var vote = Data.votes
var Whatsnew = Data.whatsnew
var Rating = Data.rating
var Price = Data.price

var Text =
  "<b>✅ Found App Info\n\n▪️Name:</b> <code>" +
  Name +
  "</code>\n<b>▪️ID:</b> <code>" +
  Id +
  "</code>\n<b>▪️Category:</b> <code>" +
  Category +
  "</code>\n<b>▪️Type:</b> <code>" +
  Type +
  "</code>\n<b>▪️Age:</b> <code>" +
  age +
  "</code>\n<b>▪️Developer:</b> <code>" +
  Developer +
  "</code>\n<b>▪️Installs:</b> <code>" +
  Installs +
  "</code>\n<b>▪️Ratings:</b> <code>" +
  Rating +
  "</code>\n▪️Price:</b> <code>" +
  Price +
  "</code>\n<b>▪️Description:</b> <code>" +
  Description +
  "</code>\n<b>▪️Summary:</b> <code>" +
  Summary +
  "</code>\n<b>▪️Whatsnew:</b> <code>" +
  Whatsnew +
  "</code>"

var inlkey = [[{ text: "Thank You", url: "https://t.me/botdiscuoo" }]]

Api.sendMessage({
  text: Text,
  parse_mode: "HTML",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inlkey }
})

