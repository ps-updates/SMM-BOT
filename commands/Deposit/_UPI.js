/*CMD
  command: /UPI
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

if (chat.chat_type !== "private") {
  Bot.sendMessage("_Open me in private_");
  return;
}

var key = Bot.getProperty("Chan");
var dp = ResLib.anotherChatRes("totaldeposit", "global");
if (!content) {
  return;
}
var data = JSON.parse(content);
var id = data.ORDERID;
var stat = data.STATUS;
var jiju = data.GATEWAYNAME;
var resp = data.RESPMSG;
var used = data.PAYMENTMODE;
var vl = data.TXNAMOUNT;
var val = parseFloat(vl);
var date = data.TXNDATE
var datee = date.slice(0, 10)
let time = new Date().toLocaleString("en-US", {
  timeZone: "Asia/kolkata"
})
var dt = Libs.DateTimeFormat.format(time, "yyyy-mm-dd")
if (datee !== dt) {
Api.editMessageCaption({
    message_id: User.getProperty("dep"),
    caption: "<b>❌ You Can't Use Old Order Ids.</>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/deposit" }]]
    }
  })
  return
}
var bon = Bot.getProperty("INOffer", 1);
if (!bon) {
  bon = "1";
}
var ad = parseFloat((val * 1) / 1);
var add = ad * parseFloat(bon);
let offer = Bot.getProperty("paytmm_offer");
var addn = offer * add;
var ss = parseFloat(1);

var des = ss * parseFloat(bon);
var hh = "";
if (des !== 1) {
  hh += "\n🤩 <b>Offer Active </b>» <i>Deposit and Get ×" + bon + " Amount!!</i>\n";
}

if (stat === "TXN_SUCCESS" && resp === "Txn Success") {
  var qrtrs = Bot.getProperty("qrTrans");
  var qrt = qrtrs ? qrtrs : [];
  if (!qrt.includes(id)) {
    qrt.push(id);
    Bot.setProperty("qrTrans", qrt, "json");
    var addn = 0.25 * val;
    var adl = add;
    var banda = Libs.commonLib.getLinkFor(user);
  /*  let balance = Libs.ResourcesLib.userRes("balance");
    balance.add(+add);*/
    Api.editMessageCaption({
      message_id: User.getProperty("dep"),
      caption:
        "<b>🔥 Your Deposit Completed\n\n 🪙Type - INR \n\n⛽ Amount : " +
        val +
        " INR\n🔮 Gained : " +
        add +
        " Rs</b>",
      parse_mode: "html",
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/deposit" }]]
      }
    });
    var admin = Bot.getProperty("admin_chat")
    var cur = Bot.getProperty("cur");
    var good = id.slice(0, 6);
    var userFirstName = user.first_name;
    Api.sendMessage({
      chat_id: admin,
      text:
        "*❤️ New Deposit Received ❤️*\n\n*👷User:* " +
        userFirstName +
        " (`"+user.telegramid+"`) *Have Deposited:*\n\n*💴 Paid Amount:* " +
        val +
        " *INR*\n\n*💎 Gained:* *" +
        add +
        " *" +
        cur +
        "\n\n*📎 Transaction ID:* `" +
        id +
        "`\n\n*✨ Through Paytm (QR) :* " +
        used +
        "\n\n⏰️* Time :* " +
        date +
        "\n\n_🤩 Get Now Your Advanced Phps & Codes Here_\n➡️ *@" +
        bot.name +
        "*",
      parse_mode: "Markdown"
    });
    dp.add(1);
  } else {
    Api.editMessageCaption({
      message_id: User.getProperty("private"),
      caption: "<b>❌ One ID Can Be Used One Time Only...</b>",
      parse_mode: "html",
      disable_web_page_preview: true,
      reply_markup: {
        inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/deposit" }]]
      }
    });
  }
} else {
  Api.editMessageCaption({
    message_id: User.getProperty("dep"),
    caption: "<b>❌ Wrong Order ID...</b>",
    parse_mode: "html",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [[{ text: "⬅️ Return", callback_data: "/deposit" }]]
    }
  });
}

