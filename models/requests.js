const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const requestsSchema = new Schema({
  email: {type: String, required: true},
  lat: {type: Number, required: true},
  long: {type: Number, required: true},
  item: {type: String, required: true}
})

const Requests = mongoose.model("Requests", requestsSchema);

module.exports = Requests

