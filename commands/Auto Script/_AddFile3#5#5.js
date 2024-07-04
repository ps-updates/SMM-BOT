/*CMD
  command: /AddFile3#5#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Auto Script
  answer: *Send Minimum Order Quantity*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("Minimum", message, "string")
  Bot.runCommand("/AddFile4#5#5")
