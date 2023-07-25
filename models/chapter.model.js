const mongoose = require("mongoose");
const { Schema } = mongoose;
const Chapter = new mongoose.Schema(
  {
    chapterName: { type: String, required: true, unique: true },
    depID: { type: mongoose.Types.ObjectId, ref: "DepartmentData" },
    createdBy: { type: mongoose.Types.ObjectId, ref: "UserData" },
    createdOn: { type: Date, default: Date.now },
    offeredInJobTitles: { type: String },//depat-id ref 
    reasons: [{ type: Object }],
    status: { type: String, default: "active" },
    // allocatestatus: { type: String, default: "notallocate" },
    // hideReason: { type: String, default: "" },
    unitsOffer: [{ type: mongoose.Types.ObjectId, ref: "UnitData" }],
    requested: [{ type: Schema.Types.ObjectId, ref: "UserData" }],
    accepted: [{ type: Schema.Types.ObjectId, ref: "UserData" }]
  },
  {
    collection: "chapters",
  }
);
const model = mongoose.model("ChapterData", Chapter);
module.exports = model;