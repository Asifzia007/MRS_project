const mongoose = require('mongoose');

const assignSchema = new mongoose.Schema({
  Code : {
    type : Number,
    required : true
  },
  Assignment : {
    type : String,
    required : true
  },
  From : {
    type : String,
    required : true
  },
  To : {
    type : String,
    required : true
  },
  Assign_date : {
    type : Date,
    required : true
  },
  Deadline_date : {
    type : Date,
    required : true
  }    
});

const Assignment = new mongoose.model('assignment',assignSchema);
module.exports = Assignment;