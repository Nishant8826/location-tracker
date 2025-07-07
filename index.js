const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

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

server.listen(5000, () => {
    console.log(`Server is listening on 5000`);
})