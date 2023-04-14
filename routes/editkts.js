const express = require("express");
const editktRoutes = express.Router();
const EditKTData = require('../models/editKT.model');

editktRoutes.route('/').get(function(req, res) {
    EditKTData.find(function(err, todo) {
        if (err) {
            console.log(err);
        } else {
            res.json(todo);
        }
    });
  });
  
editktRoutes.route('/add').post(function(req, res) {
    let editkt = new EditKTData(req.body);
    editkt.save()
        .then(editkt => {
            res.status(200).json({'KT': 'KT history added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new KT history failed');
        });
});

module.exports = editktRoutes;

 