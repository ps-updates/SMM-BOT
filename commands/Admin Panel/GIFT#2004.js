/*CMD
  command: GIFT#2004
  help: 
  need_reply: true
  auto_retry_time: 
  folder: Admin Panel

  <<ANSWER
*Send Code which you want be Redeemable by Users.
If you want it to Generate myself, hit /gen.*
  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: 
  group: 
CMD*/

var adm = Bot.getProperty("adminID")
if (user.telegramid == adm) {
  if (message == "/gen") {
    var characters =
      "1234567890ABCDEFGHIJKLUVWXYZ12345678901234567890123456789012345678901234567890"

    function generateString(length) {
      let result = ""
      const charactersLength = characters.length
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        )
      }

      return result
    }
    var rr = generateString(15)
  } else {
    var rr = message
  }

  Bot.setProperty("giftcode", rr, "string")
  let b = Bot.getProperty("giftcode")
  var options = { myData: b }
  Bot.run({ command: "GIFT#3004", options })
} else {
  Bot.sendMessage("")
}

