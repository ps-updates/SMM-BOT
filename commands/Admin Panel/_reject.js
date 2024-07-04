/*CMD
  command: /reject
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

if (!params) {
  Bot.sendMessage("Failed to Get Attributes for Rejecting Script")
  return
}
var jet = Bot.getProperty(params)
  var name = jet.pname
  var des = jet.description
  var cost = jet.cost
  var admin = jet.admin
  var photot = jet.photoo
  var photo = jet.pic
  Bot.sendMessageToChatWithId(admin, 
"ℹ️* Your Script "+name+" is Rejected by the Admin!\n\n*_📖 May be because of one of these reasons -\n1. Your Script is Free, Copyrighted or Already Available in Store!\n2. Your Demo Script is not useful for adding in shop.\n3. Your Script is not working or having errors. \n\n_*📲 You would try later by improving your Script!*"
)
Bot.sendMessage("😭 "+name+" has been Rejected and Seller was Notified! ")
