/*CMD
  command: /payrej
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Support
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

Api.sendMessage({chat_id: params,text:"*😌 Your Payment Request Rejected By Admin*\n\n😢 Reasons Can Be:\n\n_1. Fake Payment Ss\n2. Screenshot You Sent That Already Used_",parse_mode: "Markdown"})
