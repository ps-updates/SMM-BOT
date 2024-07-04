/*CMD
  command: /apic
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Editing Area
  answer: 
  keyboard: 
  aliases: 
  group: 
CMD*/

var pi = params
var p = Bot.getProperty(pi) 
var name = p.pname
var api = p.api

Bot.setProperty("changeapi", pi) 
Bot.setProperty("oldapi", api) 
Bot.sendMessage("*Send New Api Of "+name+"*\n\nCurrent : "+api+"") 
Bot.runCommand("/apic2") 

