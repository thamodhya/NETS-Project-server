// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// let Todo = new Schema({
//     unit_name: {
//         type: String
//     },
//     unit_intro: {
//         type: String
//     },     
//     quiz: {      
//         _id: {          
//           type: mongoose.Schema.Types.ObjectId,
//           auto: true,
           
//         },
//         quizName: {
//           type: String,
          
           
//         },
//         quizDesc: {
//             type: String,
             
//           },
//         questions: [
//           {
//             _id: {
//               type: mongoose.Schema.Types.ObjectId,
//               auto: true,
//               unique: true,
          
//             },
//             question: {
//               type: String,
               
//             },
//             op1: {
//               type: String,
               
//             },
//             op2: {
//               type: String,
               
//             },
//             op3: {
//               type: String,
               
//             },
//             op4: {
//               type: String,
               
//             },
             
//             correctAnswer: {
//               type: Number,
               
//             },
//           },
//         ],
//       },
// });

// module.exports = mongoose.model('Todo', Todo);


 
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
          auto: true,
           
        },
        quizName: {
          type: String,
          
           
        },
        quizDesc: {
            type: String,
             
          },
          timeLimit: {
            type: Number,
            required: true
          },
        questions: [
          {
            _id: {
              type: mongoose.Schema.Types.ObjectId,
              auto: true,
              unique: true,
          
            },
            question: {
              type: String,
               
            },
            options: [
              {
                type: String,
              }
            ],
            correctAnswer: {
              type: Number,
            },
          },
        ],
      },
});

module.exports = mongoose.model('Todo', Todo);
