/*CMD
  command: 💝 Bonus##
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

function canRun() {
  var last_run_at = User.getProperty("last_run_at")
  if (!last_run_at) {
    return true
  }
  var fullBotUsers = Bot.getProperty("wholeUsers", [])
  var already = User.getProperty("already")
  if (!already) {
    fullBotUsers.push(user.telegramid)
    Bot.setProperty("wholeUsers", fullBotUsers, "json")
    User.setProperty("already", user.telegramid, "text")
  }
  var minutes = (Date.now() - last_run_at) / 1000 / 60

  var minutes_in_day = 24 * 60
  var next = minutes_in_day - minutes
  var wait_hours = Math.floor(next / 60)
  next -= wait_hours * 60
  var wait_minutes = Math.floor(next)
  var seconds = Math.floor((next - wait_minutes) * 60)
  if (minutes < minutes_in_day) {
    Bot.sendMessage("⛔_ You Already Recieved Bonus in Last 24 Hours_")
    return
  }
  return true
}

if (!canRun()) {
  return
}
User.setProperty("last_run_at", Date.now(), "integer")
let balance = Libs.ResourcesLib.userRes("balance")
let cur = Bot.getProperty("cur")
balance.add(0.05)
Bot.sendMessage(
  "*🎁 Congrats , you Received 0.05 " +
    cur +
    "*\n\n🔍 Check Back After 24 Hours!"
)
var rn = Libs.Random.randomInt(0.1, 5)
const level = ResLib.userRes("level")
level.add(rn)

