const app = require('./app');
const connectDatabase = require('./config/database');
const dotenv = require('dotenv');
const socketIo = require('socket.io');
// Handling Uncaught Exception
process.on('uncaughtException', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
});
// Config
dotenv.config();
// Connecting to database
connectDatabase();

const server = app.listen(process.env.PORT, () => {
    console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

const users = [{}];
// socket io connection
const io = socketIo(server, {
    cors: {
        origin: 'http://localhost:3000',
        credentials: true,
    }
});
global.onlineUsers = new Map();

io.on('connect', (socket) => {
    socket.emit("hello", "ok");
    socket.on("hello", (arg) => {
        console.log(arg); // world
    });
    // global.cha   tSocket = socket;
    socket.on('add-user', (userId) => {
        console.log(socket.id);
        onlineUsers.set(userId, socket.id);
    });
    socket.on('send-msg', (data) => {
        // const sendUserSocket = onlineUsers.get(data.reciever);
        const sendUserSocket2 = onlineUsers.get(data.from);
        console.log(onlineUsers.get(data.from));
        if (sendUserSocket2) {
            console.log(onlineUsers);
            io.to(onlineUsers.get(data.reciever)).emit('msg-recieve', data);
        } else {
            console.log('user offline');
        }



    });
});
// setInterval(() => {
//     console.log(onlineUsers);
// }, 1000);



// Unhandled Promise Rejection
process.on('unhandledRejection', (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(() => {
        process.exit(1);
    });
});
// npm i express cookie-parser body-parser mongoose dotenv validator    