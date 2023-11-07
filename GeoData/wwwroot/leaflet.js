export function loadmap() {
    var map = L.map('map').setView([16.6159, 120.3269], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);
}