/*CMD
  command: /verify
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

var verify = User.getProperty("verify")
if (verify) {
  Bot.runCommand("M")
  return
}

var url2 = Libs.Webhooks.getUrlFor({
  command: "onWebhook",
  user_id: user.id
})

var webPage =
  "https://api.jobians.top/captcha/verify?webhookUrl=" +
  encodeURIComponent(url2)

var tto =
  "*✅️ Please Verify Yourself By Clicking Below Button\n\n⚠️ Don't Use VPN\n\n⚠️ Don't Create Multiple Accounts*"

var inl = [{ title: "↗️ Verify Me", url: webPage }]

Bot.sendInlineKeyboard(inl, tto)

