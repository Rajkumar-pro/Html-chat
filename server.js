const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

// Initialize the app
const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// Serve static files (HTML, CSS, JS)
app.use(express.static(__dirname + '/public'));

// When a new client connects
io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    // Listen for a message from the client
    socket.on('chatMessage', (msg) => {
        // Broadcast the message to all clients
        io.emit('chatMessage', msg);
    });

    // When the user disconnects
    socket.on('disconnect', () => {
        console.log('A user disconnected:', socket.id);
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
