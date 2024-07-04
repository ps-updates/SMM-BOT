/*CMD
  command: /permanentLink#5#5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: File
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) {
  return
}
var result = JSON.parse(content)
if (!result[0]) {
if (result.error) {
    Bot.sendMessage("error - " + result.error)
   return
}
return
}
var permLink = "https://telegra.ph" + result[0].src
Bot.sendMessage("*The file has been downloaded and is available at the link:*\n\n"+permLink+"")
