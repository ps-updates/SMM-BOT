/*CMD
  command: /dep_msg
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let msg_id = options.result.message_id
User.setProperty("dep", msg_id, "integer")

