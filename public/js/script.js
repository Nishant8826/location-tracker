const socket = io();

navigator.geolocation.watchPosition((pos) => {
    const { longitude, latitude } = pos.coords;
    socket.emit('sendLocation', { longitude, latitude })
}, (err) => {
    console.log("Error occured ", err);
}, {
    enableHighAccuracy: true,
    timeout: 5000,   // evry 5 sec
    maximumAge: 0    // no caching
}
)

const map = L.map("map").setView([0, 0], 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: "V Power Logistics"
}).addTo(map)

let markers = {};

socket.on('receiveLocation', function (data) {
    const { id, longitude, latitude } = data;
    map.setView([latitude, longitude])
    if (markers[id]) {
        markers[id].setLatLng([latitude, longitude])
    } else {
        markers[id] = L.marker([latitude, longitude]).addTo(map)
    }
})


socket.on("user-disconnected", function (id) {
    if (markers[id]) {
        map.removeLayer(markers[id]);
        delete markers[id];
    }
})

