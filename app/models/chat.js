var Document = require("LiveDocument/lib/document")

var Chat = module.exports = Document.define("Chat")
  .key("name", { length: [1, 18] })
  .key("content", { length: [1, 140] })
