
const mongoose = require("mongoose");

const EditQuizEntry = new mongoose.Schema(
  {
    quizName: {
    type: String,
    required: true
  },
  quizDesc: {
    type: String,
    required: true
  },
  timeLimit: {
    type: Number,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  old_data: {
    quizName: String,
    quizDesc: String,
    timeLimit: Number,
  },
  updatedby:{type: String},
},
  {
    collection: "editquizentry",
  }
);

const model = mongoose.model("EditQuizEntryData", EditQuizEntry);
module.exports = model;