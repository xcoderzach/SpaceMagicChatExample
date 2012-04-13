var View = require("views/view")  
  , Chat = require("../../models/chat") 
  , _ = require("underscore") 
   
module.exports = View.define("NewChatView") 
  .action("submit #newChatForm", function(event, element) { 
    event.preventDefault() 

    var chatInput = element.find(".chat") 
      , chat = chatInput.val() 
    chatInput.val("") 

    var name = element.find(".name").val() 
 
    Chat.create({ content: chat, name: name })
 
  }) 
