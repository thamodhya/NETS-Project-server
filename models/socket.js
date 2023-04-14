// socket.js
const http = require('http');
const socketIo = require('socket.io');
const express = require('express');
const app = express();

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.on('submitQuiz', (data) => {
    console.log(`User ${data.userId} submitted quiz ${data.quizId}`);

    const message = `User ${data.userId} submitted quiz ${data.quizId}`;
    io.emit('quizSubmitted', { message });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

module.exports = io;

