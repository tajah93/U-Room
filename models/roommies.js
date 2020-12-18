const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const roomSchema = new Schema({
    name: { type: String, required: true },
    url: [{type: String, required: true}]
  });

  const roommies = mongoose.model("roommies", roomSchema);
  
  module.exports = roommies;