
const mongoose = require("mongoose");

const EditQuestion = new mongoose.Schema(
  {
    question: {
    type: String,
    required: true
  },
  options: [
    {
      type: String,
      required: true
    }
  ],
  correctAnswer: {
    type: Number,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  old_data: {
    question: String,
    options: [String],
    correctAnswer: Number,
  },
  updatedby:{type: String},
},
  {
    collection: "editquestions",
  }
);

const model = mongoose.model("EditQuestionData", EditQuestion);
module.exports = model;