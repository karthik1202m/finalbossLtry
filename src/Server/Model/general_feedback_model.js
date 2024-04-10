const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  UID : String,
  username:String,
  role:String, 
  satisfaction: String,
  communication: String,
  goals: String,
  deliverables: String,
  timeliness: String,
  challenges: String,
  projectManagement: String,
  support: String,
  improvements: String
});

const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;
