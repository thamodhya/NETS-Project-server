
const mongoose = require("mongoose");

const EditArticle = new mongoose.Schema(
  {
    art_name: {
    type: String,
    required: true
  },
  art_intro: {
    type: String,
    required: true
  },
  updated_at: {
    type: Date,
    default: Date.now
  },
  old_data: {
    art_name: String,
    art_intro: String,
     
  },
  updatedby:{type: String},
},
  {
    collection: "editarticles",
  }
);

const model = mongoose.model("EditArticleData", EditArticle);
module.exports = model;