/*CMD
  command: oo
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

let stat = Bot.getProperty("" + user.telegramid + "")

if (stat == "ban") {
  Bot.sendMessage("*You're Ban*")
} else {
  let res = Libs.ResourcesLib.userRes("referral")
  let reflink = RefLib.getRefLink("Bot Name", "User")
  Bot.sendMessage(
    "*⏯ Total Invites : " +
      RefLib.getRefCount() +
      " Users\n\n⛔️ Per Referral 500 \n\n🔗 Referral Link ⬇️\n" +
      reflink +
      "*"
  )
}

