/*CMD
  command: /list2
  help: 
  need_reply: false
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER

  <<KEYBOARD

  KEYBOARD
  aliases: /list2
  group: 
CMD*/

var refList = RefLib.getRefList();
if (!refList.exist) {
  Api.sendMessage({
    text: "⚠️ You have not invited any users"
  })
  return
}

var users_rows = "";
var users = refList.getUsers();
var totalRefCount = RefLib.getRefCount(); // Fetching total referral count outside the loop

//users_rows += "\n\n*➡️ Your Total Referral Count: " + totalRefCount + "*\n\n👨‍👨‍👦 Your Referred Users ⬇️";
users_rows +=
  "*🔥  Lᴀsᴛ Rᴇғғᴇʀᴇᴅ Usᴇʀs Lɪsᴛ.\n\nTᴏᴛᴀʟ Rᴇғᴇʀʀᴇᴅ "+totalRefCount+" Usᴇʀs\n*"

for (var i = 0; i < users.length; i++) {
  var firstName = users[i].first_name || ""; 
  var lastName = users[i].last_name || ""; 
  var username = users[i].username || ""; 
 
  var name = (firstName + " " + lastName).trim();
  
  if (name !== "") {
    users_rows += "\n" + (i + 1) + ". [" + name + "](t.me/" + username + ")";
  } else if (username !== "") {
    users_rows += "\n" + (i + 1) + ". [" + username + "](t.me/" + username + ")"; 
  }
}

var msg = users_rows;
var inl = [[{ text: "🔙 Back", callback_data: "invite" }]];

Api.editMessageCaption({
  message_id: request.message.message_id,
  caption: msg,
  parse_mode: "markdown",
  disable_web_page_preview: true,
  reply_markup: { inline_keyboard: inl }
});

