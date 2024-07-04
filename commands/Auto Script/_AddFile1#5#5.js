/*CMD
  command: /AddFile1#5#5
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Auto Script
  answer: ⚡ Send Name Of Service

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

User.setProperty("Name", message, "string")

Bot.runCommand("Cn#5#5")

