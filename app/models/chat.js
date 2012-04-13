var Document = require("LiveDocument/lib/document")

var Chat = module.exports = Document.define("Chat")
  .key("name", { length: [1, 18] })
  .key("content", { length: [1, 140] })
  .afterSave(function() {
    //cull some chats, to keep the number down
    Chat.find({}, function(chats) {
      var num = chats.length - 100
      chats.sortBy("createdAt", true)
      for(i = 0 ; i < num ; i++) {
        chats.at(chats.length - (i+1)).remove()
      }
    })
  })
