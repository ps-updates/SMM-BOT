/*CMD
  command: /tgtempLink#5#5
  help: 
  need_reply: 
  auto_retry_time: 
  folder: File
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!options) {
  return
}
var link =
  "https://api.telegram.org/file/bot" +
  bot.token +
  "/" +
  options.result.file_path

HTTP.get({
  url: "http://api.codinary.org/v1/telegraph/upload?url="+ encodeURI(link),
  success: "/permanentLink#5#5", 
  folow_redirects: true
})

