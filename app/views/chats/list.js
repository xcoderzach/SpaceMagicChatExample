var ListView = require("views/list_view")  
  , NewChatView = require("./new")

module.exports = ListView.define("ChatView")                                                                                                                                             
  .template("/templates/chats/list.html")
  .subView("#newChatForm", NewChatView)
