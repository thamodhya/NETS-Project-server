const mongoose = require("mongoose");

const unitSchema = new mongoose.Schema({
  belongsToChapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
    required: true,
  },
  unitName: {
    type: String,
    required: true,
  },
  unitDesc: {
    type: String,
    required: true,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdOn: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["Active", "Inactive"],
    default: "Active",
  },
  ktSessions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "KtSession",
    },
  ],
  quiz: {
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    quizName: {
      type: String,
      required: true,
    },
    questions: [
      {
        _id: {
          type: Number,
          required: true,
        },
        question: {
          type: String,
          required: true,
        },
        createdBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
        createdOn: {
          type: Date,
          default: Date.now,
        },
        options: {
          type: [String],
          required: true,
        },
        correctAnswer: {
          type: Number,
          required: true,
        },
      },
    ],
  },
});

module.exports = mongoose.model("Unit", unitSchema);




const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Todo = new Schema({
    unit_name: {
        type: String
    },
    unit_intro: {
        type: String
    },
    quiz: {
        _id: {
            type: mongoose.Schema.Types.ObjectId,
            auto: true // generate a new ObjectId automatically
        },
        quizName: {
            type: String
        },
        quizDesc: {
            type: String
        },
        questions: [
            {
                question_id: {
                    type: Number,
                    required: true,
                    unique: true
                },
                question: {
                    type: String
                },
                op1: {
                    type: String
                },
                op2: {
                    type: String
                },
                op3: {
                    type: String
                },
                op4: {
                    type: String
                },
                correctAnswer: {
                    type: Number
                }
            }
        ]
    }
});

module.exports = mongoose.model('Todo', Todo);
