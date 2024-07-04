/*CMD
  command: api15
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Setup
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

if (!content) {
  return
}
var data = JSON.parse(content)
var stat = data.refill
var err = data.error
if (err == "Refill is disabled for this service") {
  Bot.sendMessage("*Refill Is Disabled For This Service*")
} else if (err == "The refill task is not completed for this order") {
  Bot.sendMessage("*The Refill Task Is Not Completed For This Order*")
} else {
  function canRun() {
    var last_run_atm = User.getProperty("last_run_atm")
    if (!last_run_atm) {
      return true
    }

    var minutes = (Date.now() - last_run_atm) / 1000 / 60

    var minutes_in_day = 24 * 60
    var next = minutes_in_day - minutes
    var wait_hours = Math.floor(next / 60)
    next -= wait_hours * 60
    var wait_minutes = Math.floor(next)
    var seconds = Math.floor((next - wait_minutes) * 60)
    if (minutes < minutes_in_day) {
      Bot.sendMessage(
        "*📛 You Have Already Received A Refill For Today \n\n▶️ Come Back After ⏳ " +
          wait_hours +
          " h " +
          wait_minutes +
          " m " +
          seconds +
          " s*"
      )
      return
    }
    return true
  }

  if (!canRun()) {
    return
  }
  User.setProperty("last_run_atm", Date.now(), "integer")
  Bot.runCommand("main_menu")
  var butt = [[{ title: "🌟 Rate Us", command: "⭐️ Rate Us" }]]
  Bot.sendInlineKeyboard(butt, "*Refill ID :* `" + stat + "`")
}

