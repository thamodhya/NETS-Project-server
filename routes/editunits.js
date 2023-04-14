const express = require("express");
const editunitRoutes = express.Router();
const EditUnitData = require('../models/editunit.model');

editunitRoutes.route('/').get(function(req, res) {
    EditUnitData.find(function(err, todo) {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
  });
  
editunitRoutes.route('/add').post(function(req, res) {
    let editunit = new EditUnitData(req.body);
    editunit.save()
        .then(editunit => {
            res.status(200).json({'unit': 'unit history added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new unit history failed');
        });
});

module.exports = editunitRoutes;

 