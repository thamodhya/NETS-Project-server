const express = require("express");
const editquizentryRoutes = express.Router();
const EditQuizEntryData = require('../models/editQuizEntry.model');

editquizentryRoutes.route('/').get(function(req, res) {
    EditQuizEntryData.find(function(err, todo) {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
  });
  
  editquizentryRoutes.route('/add').post(function(req, res) {
    let editquizentry = new EditQuizEntryData(req.body);
    editquizentry.save()
        .then(editquizentry => {
            res.status(200).json({'Article': 'Article history added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new Article history failed');
        });
});

module.exports = editquizentryRoutes;

 