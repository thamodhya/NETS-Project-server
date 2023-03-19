const express = require("express");
const ktRoutes = express.Router();
const KT = require('../models/kt.model');
//KT.findById().chaptersOffer.findById().unitsOffer.findById().quizzes.questions.push()
ktRoutes.route('/').get(function(req, res) {
    KT.find(function(err, kt) {
        if (err) {
            console.log(err);
        } else {
            res.json(kt);
        }
    });
});

ktRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    KT.findById(id, function(err, kt) {
        res.json(kt);
    });
});

ktRoutes.route('/add').post(function(req, res) {
    let kt = new KT(req.body);
    kt.save()
        .then(kt => {
            res.status(200).json({'kt': 'KT added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new KT failed');
        });
});

ktRoutes.route('/update/:id').post(function(req, res) {
    KT.findById(req.params.id, function(err, kt) {
        if (!kt)
            res.status(404).send('data is not found');
        else
            kt.kt_name = req.body.kt_name;
            kt.kt_intro = req.body.kt_intro;
             

            kt.save().then(kt => {
                res.json('KT updated');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});


ktRoutes.route('/delete/:id').delete((req, res, next) => {
    KT.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
            'kt': 'KT deleted successfully'
        })
      }
    })
  });



module.exports = ktRoutes;