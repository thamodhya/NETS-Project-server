const express = require("express");
const artRoutes = express.Router();
const Art = require('../models/article.model');

artRoutes.route('/').get(function(req, res) {
    Art.find(function(err, art) {
        if (err) {
            console.log(err);
        } else {
            res.json(art);
        }
    });
});

artRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    Art.findById(id, function(err, art) {
        res.json(art);
    });
});

artRoutes.route('/add').post(function(req, res) {
    let art = new Art(req.body);
    art.save()
        .then(art => {
            res.status(200).json({'art': 'Article added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new Article failed');
        });
});

artRoutes.route('/update/:id').post(function(req, res) {
    Art.findById(req.params.id, function(err, art) {
        if (!art)
            res.status(404).send('data is not found');
        else
        art.art_name = req.body.art_name;
        art.art_intro = req.body.art_intro;
             

        art.save().then(art => {
            res.status(200).json({'art': 'Article updated successfully'});
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

artRoutes.route('/delete/:id').delete((req, res, next) => {
    Art.findByIdAndRemove(req.params.id, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.status(200).json({
          msg: data,
        })
      }
    })
  });



module.exports = artRoutes;