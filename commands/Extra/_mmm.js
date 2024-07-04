/*CMD
  command: /mmm
  help: 
  need_reply: false
  auto_retry_time: 
  folder: Extra

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

Api.sendPhoto({
  photo: "https://graph.org/file/c6cb63fb3b91d84b9c947.jpg",
  on_result: "Edited",
  is_reply: false
})

/*Api.sendMessage({
  text: "_ʟᴏᴀᴅɪɴɢ . . ._",
  parse_mode: "Markdown",
  on_result: "Edited",
  is_reply: false
})*/

