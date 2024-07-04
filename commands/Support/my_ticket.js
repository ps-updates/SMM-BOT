/*CMD
  command: my_ticket
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Support
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var tickets = User.getProperty("tickets") || []; // Retrieve the tickets array from user's property

if (tickets.length > 0) {
  var ticketList = tickets.map(function(ticket) {
    return "*•* `" + ticket + "`";
  });
  
  var ticketIds = ticketList.join("\n"); // Join the ticket IDs with line breaks
  
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "*📕 Here is Your Support ID History:*\n\n" + ticketIds,
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🗑️ Delete Historys", callback_data: "del" }],[
          { text: "◀️ Return", callback_data: "Support" }
        ]
      ]
    }
  });

  return;
} else {
  Api.editMessageText({
    message_id: request.message.message_id,
    text: "_⛔ No Tickets Found._",
    parse_mode: "Markdown",
    disable_web_page_preview: true,
    reply_markup: {
      inline_keyboard: [
        [
          { text: "🎫 Open Ticket", callback_data: "new_ticket" }],[
          { text: "◀️ Return", callback_data: "Support" }
        ]
      ]
    }
  });
}

