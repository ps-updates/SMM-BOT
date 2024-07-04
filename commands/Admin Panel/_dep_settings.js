/*CMD
  command: /dep_settings
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

var botn = [[{text:"🏦 Change Qr", callback_data:"/change_qr"}],[{text:"💟 Paytm Bonus", callback_data:"/paytm_offer"}],[{text:"💎 BB Bonus", callback_data:"/bb_offer"},{text:"⌫ Back", callback_data:"/admin"}]]
var up = "*📒 Welcome to Deposit Settings Panel*\nChoose Something to Change"

Api.editMessageText({
  message_id: request.message.message_id, 
  text:up, 
  parse_mode:"markdown", disable_web_page_preview: true, 
  reply_markup: {inline_keyboard: botn}
})
