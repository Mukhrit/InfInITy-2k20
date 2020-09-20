const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const livestats = new Schema({
  list: {
    type: Array,
    default:[]
  },
  success: {
    type: Boolean,
    default:false
  },
});
var LiveStats = mongoose.model("liveStats", livestats);

module.exports = LiveStats;
