/*CMD
  command: /startt
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

HTTP.post({
  url:
    "https://api.bots.business/v1/bots/" +
    bot.id +
    "/status?api_key={api key botsbusiness}",
  success: "/onStart ",
  body: { status: "start_launch" }
})

