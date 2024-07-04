/*CMD
  command: /upipay2
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Deposit
  answer: *✨ Send Order (UTR) Id*
  keyboard: 
  aliases: 
  group: 
CMD*/

var pics = User.getProperty("payment")
var admin_chat = Bot.getProperty("admin_chat");

Api.sendPhoto({
  chat_id: admin_chat,
  photo: pics, // it is a picture!
  caption: "*🏦 New Payment Add Request*\n\n👤*User* : "+user.first_name+"\n🆔*User Id* : `"+user.telegramid+"`\n\n✨* Order Id :* `"+message+"`",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "✅ Accept", callback_data: "/add_bal" },
        { text: " ❌️ Reject ", callback_data: "/payrej "+user.telegramid+"" }
      ]
    ]
  }
});

Bot.sendMessage("*🏦 Payment Request Send !*\n_❤️ Now Wait For Admin Response_")
