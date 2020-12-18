const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const schema = new Schema({
    name: { type: String, required: true },
    url: [{type: String, required: true}]
  });

  const roommies = mongoose.model("roommies", schema);
  
  module.exports = roommies;