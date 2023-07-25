const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
 
const PORT = 1337;

app.use(cors());
app.use(bodyParser.json());

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/NETS', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

//route imports
app.use(require("./routes/authentication"));

app.use(require("./routes/unit"));
app.use(require("./routes/chapter"));

app.use('/units', require("./routes/units"));
app.use('/kts', require("./routes/ktsessions"));
app.use('/arts', require("./routes/articles"));
app.use('/submissions', require("./routes/quizAnswers"));

app.use('/editunits', require("./routes/editunits"));
app.use('/editkts', require("./routes/editkts"));
app.use('/editarticles', require("./routes/editarticles"));
app.use('/editquestions', require("./routes/editquestions"));

app.use('/deleteunits', require("./routes/deleteunits"));
app.use('/deletekts', require("./routes/deletekts"));
app.use('/deletearticles', require("./routes/deletearticles"));
app.use('/deletequestions', require("./routes/deletequestions"));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


 