 
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
//const todoRoutes = express.Router();
const PORT = 4000;

//let Todo = require('./todo.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/chapter', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/units', require("./routes/units"));
app.use('/kts', require("./routes/kts"));
app.use('/arts', require("./routes/arts"));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});