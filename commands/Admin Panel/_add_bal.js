/*CMD
  command: /add_bal
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel
  answer: 🥳 *Enter the User Id*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

//User.setProperty('addbuser', message)
var admin = Bot.getProperty("adminID")
if (user.telegramid == admin) {
  let msg = message
  User.setProperty("editid", msg, "integer")
  let tgid = User.getProperty("editid")
  // telegramid - it is telegram id for another user
  let bal = Libs.ResourcesLib.anotherUserRes("balance", tgid)
  Bot.sendMessage(
    "*🆔 User Id :-* " + tgid + " \n\n💰 Balance   :- " + bal.value()
  )
  Bot.sendMessage("🥰 *Send me Amount to add to User's Balance *")

  Bot.runCommand("/add_bal2")
} else {
  Bot.sendMessage(" ")
}

