export function loadmap(raw) {
    console.log(JSON.parse(String(raw)));
    let map = L.map('map').setView({ lon: 120.3209, lat: 16.6159 }, 7);
    //https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png
    //https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
        attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',
        maxZoom: 16
    }).addTo(map);
    var geojson_layer = L.geoJSON().addTo(map);
    var geojson_data = JSON.parse(String(raw));
    
    for (var g of geojson_data) {
        geojson_layer.addData(g);
        var marker = new L.marker(
            [
                g.geometry.coordinates[1],
                g.geometry.coordinates[0]
            ],
            {
                opacity: 0.01
            }
        );
        marker.bindTooltip(g.properties.name,
            {
                permanent: true,
                className: "my-label",
                offset: [0, 0]
            }
        );
        marker.addTo(map);
    }
    return "";
}

