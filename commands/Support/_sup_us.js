/*CMD
  command: /sup_us
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Support
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

let msg_id = options.result.message_id
User.setProperty("mm", msg_id, "integer")
