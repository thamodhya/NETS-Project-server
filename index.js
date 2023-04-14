const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
 
const PORT = 1337;

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
app.use('/submissions', require("./routes/submissions"));
app.use('/editunits', require("./routes/editunits"));
app.use('/editkts', require("./routes/editkts"));
app.use('/editarticles', require("./routes/editarticles"));
app.use('/editquizentry', require("./routes/editquizentry"));
app.use('/editquestions', require("./routes/editquestions"));

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});


// const express = require('express');
// const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const mongoose = require('mongoose');
// const http = require('http');
// const socketIo = require('socket.io');
 
// const PORT = 1337;

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.set('strictQuery', false);

// mongoose.connect('mongodb://127.0.0.1:27017/chapter', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })

// app.use('/units', require("./routes/units"));
// app.use('/kts', require("./routes/kts"));
// app.use('/arts', require("./routes/arts"));
// app.use('/submissions', require("./routes/submissions"));

// // Add the following code to create a Socket.IO server and listen for connections
// const server = http.createServer(app);
// const io = socketIo(server);

// io.on('connection', (socket) => {
//   console.log('A user connected');

//   socket.on('notification', (notificationData) => {
//     console.log('Quiz submitted:', notificationData);

//     // Send a notification to the teacher
//     io.emit('notification', 'A new quiz submission is available');
//   });
// });


// server.listen(PORT, function() {
//     console.log("Server is running on Port: " + PORT);
// });


 
// io.on('connection', (socket) => {
//   console.log('New user connected');

//   socket.on('submitQuiz', (data) => {
//     console.log(`User ${data.userId} submitted quiz ${data.quizId}`);

//     const message = `User ${data.userId} submitted quiz ${data.quizId}`;
//     io.emit('quizSubmitted', { message });
//   });

//   socket.on('disconnect', () => {
//     console.log('User disconnected');
//   });
// });
