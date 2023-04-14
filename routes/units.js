 

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
            res.status(200).json({'unit': 'unit added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new unit failed');
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
                res.status(200).json({'unit': 'unit updated successfully'});
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
        }
    });
    
});

// todoRoutes.route('/update/:id').post(function(req, res) {
//   Todo.findById(req.params.id, function(err, todo) {
//       if (!todo) {
//           res.status(404).send('data is not found');
//       } else {
//           const oldData = {
//             unit_name: todo.unit_name,
//             unit_intro: todo.unit_intro
//           };
          
//           todo.unit_name = req.body.unit_name;
//           todo.unit_intro = req.body.unit_intro;
//           todo.old_data = oldData;
           
//           todo.save().then(todo => {
//               res.status(200).json({'unit': 'unit updated successfully'});
//           })
//           .catch(err => {
//               res.status(400).send("Update not possible");
//           });
//       }
//   });
// });


todoRoutes.route('/delete/:id').delete((req, res, next) => {
    Todo.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
            'unit': 'unit deleted successfully'
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
            todo.quiz.timeLimit = req.body.timeLimit;
             
            todo.save().then(todo => {
                res.status(200).json({'Quiz': 'Quiz updated successfully'});
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
  
      const newQuestion = {
        question: req.body.question,
        options: req.body.options,
        correctAnswer: req.body.correctAnswer
      };
       
      unit.quiz.questions.push(newQuestion);
  
      const updatedUnit = await unit.save();
  
      res.json(updatedUnit);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  });

todoRoutes.delete('/:unitId/delete/:id', async (req, res) => {
  const { unitId, id } = req.params;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      unitId,
      { $pull: { "quiz.questions": { _id: id } } },
      { new: true }
    );
    res.status(200).json(updatedTodo);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
});

todoRoutes.put('/:id/update/:questionId', (req, res, next) => {
  const id = req.params.id;
  const questionId = req.params.questionId;
  Todo.findById(id, (err, todo) => {
    if (err) {
      console.log(err);
    } else {
      const question = todo.quiz.questions.id(questionId);
      question.question = req.body.question;
      question.options = req.body.options;
      question.correctAnswer = req.body.correctAnswer;
      todo.save()
        .then(todo => {
          res.status(200).json({'Questions': 'Question updated successfully'});
        })
        .catch(err => {
          res.status(400).send('Update not possible');
        });
    }
  });
});   

module.exports = todoRoutes;

 