const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const dotenv = require("dotenv").config();
const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000

app.set("view engine", "ejs");
app.use(express.static('public'));


io.on("connection", function (si) {
    console.log("connected");
    si.on('sendLocation', function (data) {
        io.emit("receiveLocation", { id: si.id, ...data })
    })

    si.on("disconnect", function () {
        io.emit("user-disconnected", si.id)
    })
})

app.get('/', (req, res) => {
    res.render("index");
})



server.listen(PORT, '0.0.0.0', () => {
    console.log(`Server is listening on ${PORT}`);
})