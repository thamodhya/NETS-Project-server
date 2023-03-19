 

 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Art = new Schema({
    art_name: {
        type: String
    },
    art_intro: {
        type: String
    },
     
});

module.exports = mongoose.model('Art', Art);

// Articles = [
//     {
//       _id: "id2354656657568",
//       belongsToChapter: "chapter id",
//       articleName: "HTML Basics",
//       articleDesc: "HTML is a markup language",
//       createdBy: "id from users collection",
//       createdOn: "date",
//       files: ["URL1", "URL2", "URL3"],
//       overallRating: 4,
//       overallQuality: 4,
//       overallComm: 4,
//       overallClarity: 4,
//       overallKnowledgeAndSkill: 4,
//       ratings: [
//         {
//           _id: "id from users collection",
//           ratedOn: "date",
//           qualityRate: 4,
//           commRate: 4,
//           clarityRate: 4,
//           knowledgeAndSkillRate: 4,
//         },
//       ],
//       comments: [
//         {
//           _id: "object id",
//           addedBy: "userId",
//           comment: "This is a comment",
//           commentedOn: "date",
//           replies: [
//             {
//               _id: "obj id",
//               addedBy: "userId",
//               reply: "This is a reply",
//               repliedOn: "date",
//             },
//           ]
//         },
//       ]
//     }
//   ]