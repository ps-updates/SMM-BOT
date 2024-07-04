/*CMD
  command: /bot_settings
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

var ad = Bot.getProperty("adminID") 
if(user.telegramid != ad){
return}

var botn = [[{text:"🍝 Set Discount On All Script", callback_data:"/discount"}],[{text:"☄️ Set  Updates",callback_data:"/setupdate"}],[{text:"⌫ Back", callback_data:"/admin"}]]
var up = "*📒 Welcome to Bot Settings Panel*\nChoose Something to Change"

Api.editMessageText({
  message_id: request.message.message_id, 
  text:up, 
  parse_mode:"markdown", disable_web_page_preview: true, 
  reply_markup: {inline_keyboard: botn}
})
