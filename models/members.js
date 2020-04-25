const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const membersSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, required: true},
  firstname: {type: String, required: true},
  lastname: {type: String, required: true},
  phonenumber: {type: String}
})

const Members = mongoose.model("Members", membersSchema);

module.exports = Members