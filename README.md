# 📍 User Live Location Tracker

A real-time live location tracking system built using **Leaflet.js**, **Socket.io**, and the **Geolocation API**. It visualizes user movement on a map.

---

## ✨ Features

- 📡 Real-time location tracking using `navigator.geolocation.watchPosition`
- 🗺️ Interactive maps with [Leaflet.js](https://leafletjs.com/)
- 🔁 WebSocket communication using [Socket.io](https://socket.io/)
- 📍 Markers for all users
- 👥 Multi-user tracking support with disconnect handling

---

## 🧰 Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Libraries**: 
  - [Leaflet.js](https://leafletjs.com/) (Map rendering)
  - [Leaflet Routing Machine](https://www.liedman.net/leaflet-routing-machine/) (Route drawing)
  - [Socket.io-client](https://socket.io/)
- **Backend** (not included here):
  - Express.js with [Socket.io](https://socket.io/) for real-time communication

---

## 📦 Installation

1. **Clone the repository:**

```bash
git clone https://github.com/your-username/user-live-location-tracker.git
cd user-live-location-tracker
