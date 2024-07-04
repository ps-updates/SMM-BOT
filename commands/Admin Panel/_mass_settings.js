/*CMD
  command: /mass_settings
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
var botn = [[{text:"🔉 Broadcast ", callback_data:"/globroad"}],[{text:"🛂 Private Message", callback_data:"/privatemass"}], [{text:" ⬅️ Back", callback_data:"/admin"}]]

var up = " *Select Your Message Type.You Can Send Broadcast or Private Message Anytime.* \n- Kindly Select an Option."

Api.editMessageText({
  message_id: request.message.message_id, 
  text:up, 
  parse_mode:"markdown", disable_web_page_preview: true, 
  reply_markup: {inline_keyboard: botn}
})
