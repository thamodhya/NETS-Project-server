

const express = require('express');
const router = express.Router();
const QuizSubmissionData = require('../models/quizsub.model');

router.route('/').get(function(req, res) {
  QuizSubmissionData.find(function(err, todo) {
      if (err) {
          console.log(err);
      } else {
          res.json(todo);
      }
  });
});

router.post('/:unitId', (req, res) => {
  const { unitId } = req.params;
   
  const { questions } = req.body;

  const newSubmission = new QuizSubmissionData({
    unitId:unitId,
    questions: questions,
     
  });

  newSubmission.save((err, quizsubmission) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error saving quiz submission to database');
    }
    console.log('Quiz submission saved:', quizsubmission);
    
    return res.status(200).send('Quiz submission saved to database');
     
  });
});

module.exports = router;
// const { questions } = req.body.questions;

// // Import socket.io and set up the server
// const io = require("socket.io")(server);

// // Listen for socket connections
// io.on("connection", (socket) => {
//   console.log("A user connected");
  
//   // Listen for quiz-submitted event
//   socket.on("quiz-submitted", (quizData) => {
//     // Save the quiz submission to the database
//     QuizSubmission.create(quizData, (err, submission) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log(submission);
//         // Send a notification to the teacher
//         socket.emit("notification", "A new quiz submission is available");
//       }
//     });
//   });
// });

 

// const http = require('http');
// const express = require('express');
// const router = express.Router();
// const QuizSubmissionData = require('../models/quizsub.model');
// const server = http.createServer(router);
 

// // Import socket.io and set up the server
// const io = require("socket.io")(server);


// router.post('/:unitId', (req, res) => {
//   const { unitId } = req.params;
   
//   const { questions } = req.body;

//   const newSubmission = new QuizSubmissionData({
//     unitId:unitId,
//     questions: questions,
     
//   });

//   newSubmission.save((err, quizsubmission) => {
//     if (err) {
//       console.error(err);
//       return res.status(500).send('Error saving quiz submission to database');
//     }
//     console.log('Quiz submission saved:', quizsubmission);
    
//     return res.status(200).send('Quiz submission saved to database');
     
//   });

//   io.on("connection", (socket) => {
//     console.log("A user connected");
    
//     // Listen for quiz-submitted event
//     socket.on("quiz-submitted", (quizData) => {
       
//           // Send a notification to the teacher
//           socket.emit("notification", "A new quiz submission is available");
//         })
       
//     });
   

// });

 

// module.exports = router;