 

const mongoose = require('mongoose');
const KT = new mongoose.Schema(
    {
        kt_name: {
            type: String
        },
        kt_intro: {
            type: String
        },
    },
    {
        collection: "kts"
    }
)
const model = mongoose.model('KT', KT);
module.exports = model;

// KTSessions = [
//     {
//       _id: "obj id",
//       belongsToUnit: "unit id",
//       belongsToChapter: "chapter id",
//       sessionName: "HTML Basics",
//       sessionDesc: {
//         text: "HTML is a markup language",
//         video: "https://www.youtube.com/watch?v=FLvxuM1_rDk",
//         audio: "https://www.youtube.com/watch?v=FLvxuM1_rDk",
//       },
//       createdBy: "id from users collection",
//       createdOn: "date",
//       overallRating: 4,
//       overallQuality: 4,
//       overallComm: 4,
//       overallClarity: 4,
//       overallKnowledgeAndSkill: 4,
//       ratings: [
//         {
//           userId: "21414",
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
//     },
//   ]