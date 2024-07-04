/*CMD
  command: /upipay
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Deposit
  answer: *🏦 Send Payment Full Screenshot*
  keyboard: 
  aliases: 
  group: 
CMD*/

if (request.photo) {
  User.setProperty("payment", request.photo[0].file_id)
  //Api.sendPhoto({photo:request.photo[0].file_id})
  Bot.sendMessage("")

  Bot.runCommand("/upipay2")
  return
}
Bot.sendMessage("*🥴 Only Photo Allowed*")
