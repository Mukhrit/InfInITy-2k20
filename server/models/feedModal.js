const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const feed = new Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
},{
  timestamps:true
});
var Feedbacks = mongoose.model('feedback', feed);

module.exports = Feedbacks;
