/*CMD
  command: /get_link
  help: 
  need_reply: true
  auto_retry_time: 
  folder: File
  answer: Send Your File
  keyboard: 
  aliases: 
  group: 
CMD*/

function defineObject(){
  var Object = {}
  if(request.voice){
    Object.type = "voice"
    Object.file_id = request.voice.file_id
  }
  if(request.video){
    Object.type = "video"
    Object.file_id = request.video.file_id
  }
  if(request.document){
    Object.type = "document"
    Object.file_id = request.document.file_id
  }
  if(request.audio){
    Object.type = "audio"
    Object.file_id = request.audio.file_id
  }
  if(request.photo[0]){
    Object.type = "photo"
    Object.file_id = request.photo[0].file_id
  }
  if(request.photo[1]){
    Object.type = "photo"
    Object.file_id = request.photo[1].file_id
  }
  if(request.photo[2]){
    Object.type = "photo"
    Object.file_id = request.photo[2].file_id
  }
  if(request.photo[3]){
    Object.type = "photo"
    Object.file_id = request.photo[3].file_id
  }
  if(request.animation){
    Object.type = "animation"
    Object.file_id = request.animation.file_id
  }
  return Object
}
Bot.sendMessage("*Uploading...*")
var ObjectData = defineObject()
Api.getFile({ file_id: ObjectData.file_id, on_result: "/tgtempLink#5#5" })
