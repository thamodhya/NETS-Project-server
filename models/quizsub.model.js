const mongoose = require("mongoose");

const QuizSubmission = new mongoose.Schema(
  {
    unitId:{type: String},
    questions: [
      {
        questionValue: { type: String },
        answers: [{ type: String }],
        correctAnswer: { type: Number },
        submittedAnswer: { type: Number },
      },
    ],
    attemptedTime: { type: Date, default: Date.now() },
    submittedTime: { type: Date, default: Date.now() },
  },
  {
    collection: "quizsubmissions",
  }
);

const model = mongoose.model("QuizSubmissionData", QuizSubmission);
module.exports = model;
 


// const mongoose = require("mongoose");

// const QuizSubmission = new mongoose.Schema(
//   {
//     chapterId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "ChapterData",
       
//     },
//     unitId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "UnitData",
       
//     },
//     userId: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "UserData",
       
//     },
//     score: { type: Number },
//     attemptedTime: { type: Date, default: Date.now() },
//     submittedTime: { type: Date, default: Date.now() },
//     questions: [
//       {
//         questionValue: { type: String },
//         answers: [String],
//         correctAnswer: { type: Number },
//         submittedAnswer: { type: Number },
//       },
//     ],
//   },
//   {
//     collection: "quizsubmissions",
//   }
// );

// const model = mongoose.model("QuizSubmissionData", QuizSubmission);
// module.exports = model;




// quizSubmissions = [
//     {
//       _id: "objId",
//       quizBelongsToDepartmet: "",
//       chapterId: "",
//       unitId: "",
//       userID: "205080K",
//       score: 34,
//       attemptedTime: "date",
//       submittedTime: "date",
//       questions: [
//         {
//           questionValue: "",
//           answers: [],
//           correctAnswer: 2,//index
//           submittedAnswer: 3
//         }
//       ]
//     },
//   ]