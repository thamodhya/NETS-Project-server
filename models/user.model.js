const mongoose = require("mongoose");
const User = new mongoose.Schema(
  {
    userRoleId: { type: mongoose.Schema.Types.ObjectId, ref: "UserRoleData" },
    empId: { type: String, default: "001A" },
    firstName: { type: String  },
    lastName: { type: String  },
    gender: { type: String  },
    dob: { type: Date  },
    phoneNumber: { type: Number  },
    SubmittedOn: { type: String, default: Date.now },//Date
    emailAddress: { type: String , unique: true },
    verified: { type: String, default: "false" },
    userStatus: { type: String, default: "active" },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "DepartmentData", },
    jobPosition: { type: mongoose.Schema.Types.ObjectId, ref: "DepartmentData", },
    // jobPosition: { type: mongoose.Schema.Types.ObjectId, ref: "JobtitleData", },//DepartmentData
    badges: [{ badgeValue: { type: String }, earnedOn: { type: Date }, },],
    earnedScoresByQuiz: { numOfQuizzesDone: { type: Number }, totalScoresEarned: { type: Number }, },
    notification: [{ type: String}],
  },
  {
    collection: "users",
  }
);

const model = mongoose.model("UserData", User);
module.exports = model;
