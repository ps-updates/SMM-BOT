/*CMD
  command: /Onro
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Deposit

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/


var gpin = Bot.getProperty("gpin","98971011015311001014810") 
var id = User.getProperty("id") 

HTTP.get( {
        url: "https://full2sms.in/gateway/paymentStatus?order_id="+id+"&gpin="+gpin+"",
success: "/Onro1"
      } )
