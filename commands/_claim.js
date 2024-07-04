/*CMD
  command: /claim
  help: 
  need_reply: true
  auto_retry_time: 
  folder: 
  answer: *Please Enter Your Email*

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

/*function canRun(){
  var get = User.getProperty("get");
  if(!get){ return true }
  
  var minutes = (Date.now() - get) /1000/60;
  
 var minutes_in_day = 12 * 60
          var next = minutes_in_day - minutes
          var wait_hours = Math.floor(next / 60)
          next -= wait_hours * 60
          var wait_minutes = Math.floor(next)
          var seconds = Math.floor((next - wait_minutes) * 60)
          if (minutes < minutes_in_day) {
   Bot.sendMessage("*❤️ You Already Claimed This Bot *" );
   Api.answerCallbackQuery({

callback_query_id: request.id,

text: "❤️ You Already Claimed This Bot",

show_alert: true })
   return
 }
  return true;
 }

if(!canRun()){ return }
User.setProperty("get", Date.now(), "integer");*/
var admin = Bot.getProperty("admin_chat")
if (user.telegramid == admin) {
  BBAdmin.installBot({
    email: message,
    bot_id: bot.id
  })
  Bot.sendMessage(
    "Bot Send Successfully : " +
      message +
      "\n\n⚠️ Note :\nPlease Join Our Channel For More Free Bots : @UdayScripts"
  )

  Api.sendMessage({
    chat_id: "@UdayScripts_Alerts",
    text:
      "*🤖 New  Claimed Bot\n\n👤 User:* " +
      user.first_name +
      "\n\n*🛒Claimed: @" +
      bot.name +
      "*\n\n🙈_Send_ `/claim` _On Bot For Claim Smm Bot_\n🤩 *Your Pro Bots And Codes Giveaway here ⬇️: @UdayScripts*",
    parse_mode: "Markdown"
  })
} else {
  Bot.sendMessage("not Admin")
}

