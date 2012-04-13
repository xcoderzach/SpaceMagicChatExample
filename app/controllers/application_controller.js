var LiveController = require("LiveController/lib/live_controller")
  , StaticView     = require("views/static")
  , Chat           = require("../models/chat")
  , ChatView       = require("../views/chats/list")

LiveController.Controller("/", function(app) {
  app.get(function() {
    this.view = new ChatView(Chat.find())
  })
})
