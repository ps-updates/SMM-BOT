/*CMD
  command: del
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Support
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

User.setProperty("tickets", [], "json"); // Set an empty array as the value for "tickets" property

Api.editMessageText({
  message_id: request.message.message_id,
  text: "*📕 Your History Has Been Cleared.*",
  parse_mode: "Markdown",
  disable_web_page_preview: true,
  reply_markup: {
    inline_keyboard: [
      [
        { text: "◀️ Return", callback_data: "Support" }
      ]
    ]
  }
});

