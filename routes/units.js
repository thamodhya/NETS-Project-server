 

const express = require("express");
const todoRoutes = express.Router();
const Todo = require('../models/todo.model');

todoRoutes.route('/').get(function(req, res) {
    Todo.find(function(err, todo) {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
});

todoRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
});

todoRoutes.route('/add').post(function(req, res) {
    let todo = new Todo(req.body);
    todo.save()
        .then(todo => {
            res.status(200).json({'todo': 'todo added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new todo failed');
        });
});

todoRoutes.route('/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo) {
            res.status(404).send('data is not found');
        } else {
            todo.unit_name = req.body.unit_name;
            todo.unit_intro = req.body.unit_intro;
             
            todo.save().then(todo => {
                res.status(200).json({'todo': 'todo updated successfully'});
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
    
});


todoRoutes.route('/delete/:id').delete((req, res, next) => {
    Todo.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
            'todo': 'todo deleted successfully'
        })
      }
    })
  });

  todoRoutes.route('/quizentry/update/:id').post(function(req, res) {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo) {
            res.status(404).send('data is not found');
        } else {
            todo.quiz.quizName = req.body.quizName;
            todo.quiz.quizDesc = req.body.quizDesc;
             
            todo.save().then(todo => {
                res.status(200).json({'todo': 'todo updated successfully'});
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
  });

  todoRoutes.get('/units/quizentry/:id', async (req, res) => {
    try {
      const unit = await Todo.findOne({_id: req.params.id});
      res.json(unit.quiz);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });

  todoRoutes.post('/:id/quiz', async (req, res) => {
    try {
      const unit = await Todo.findById(req.params.id);
      if (!unit) {
        return res.status(404).json({ message: 'Unit not found' });
      }
  
      const newQuiz = {
        question: req.body.question,
        op1: req.body.op1,
        op2: req.body.op2,
        op3: req.body.op3,
        op4: req.body.op4,
      };
       
      unit.quiz.questions.push(newQuiz);
  
      const updatedUnit = await unit.save();
  
      res.json(updatedUnit);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });
    
  todoRoutes.route('/q/update/:id').post(function(req, res) {
    const unitId = req.params.id;
    const questionId = req.body.questionId;
  
    Todo.findById(unitId, function(err, unit) {
      if (!unit) {
        res.status(404).send('Unit not found');
      } else {
        const questionIndex = unit.quiz.questions.findIndex(q => q._id == questionId);
        if (questionIndex === -1) {
          res.status(404).send('Question not found');
        } else {
          const question = unit.quiz.questions[questionIndex].unitId;
          question.question = req.body.question;
          question.op1 = req.body.op1;
          question.op2 = req.body.op2;
          question.op3 = req.body.op3;
          question.op4 = req.body.op4;
  
          unit.save().then(() => {
            res.status(200).json({'message': 'Question updated successfully'});
          }).catch(err => {
            res.status(400).send("Update not possible");
          });
        }
      }
    });
  });
  
//   todoRoutes.route('/q/update/:id').post(function(req, res) {
//     Todo.quiz.questions.findById(req.params.id, function(err, todo) {
//         if (!todo) {
//             res.status(404).send('data is not found');
//         } else {
//             todo.question = req.body.question;
//             todo.op1 = req.body.op1;
//             todo.op2 = req.body.op2;
//             todo.op3 = req.body.op3;
//             todo.op4 = req.body.op4;
             
//             todo.save().then(todo => {
//                 res.status(200).json({'todo': 'todo updated successfully'});
//             })
//             .catch(err => {
//                 res.status(400).send("Update not possible");
//             });
//         }
//     });
    
// });

   
module.exports = todoRoutes;