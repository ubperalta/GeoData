export function loadmap() {

    var dingras = L.marker([120.551192, 18.0492143]).bindPopup('Ilocos Norte Research and Experiment Center (INREC)<br />City of Batac, Ilocos Norte'),
        batac = L.marker([120.6963785, 18.1034401]).bindPopup('Ilocos Norte Research and Experiment Center (INREC)<br />Dingras, Ilocos Norte'),
        sanjuan = L.marker([120.4673797, 17.7523884]).bindPopup('Ilocos Sur Research Center (IsREC)<br />San Juan, Ilocos Sur'),
        bacnotan = L.marker([120.388, 16.7314]).bindPopup('Ilocos Region Integrated Agricultural Research Center (ILIARC)<br />Bacnotan, La Union0'),
        rfo1 = L.marker([120.318647, 16.609304]).bindPopup('Department of Agriculture RFO-1<br />City of San Fernando, La Union'),
        sual = L.marker([120.0846312, 16.0698145]).bindPopup('Department of Agriculture - Pangasinan Research and Experiment Center (PREC)<br />Sual, Pangasinan<br />(Organic Center)'),
        stabarbara = L.marker([120.4036145, 16.0007638]).bindPopup('Department of Agriculture - Pangasinan Research and Experiment Center (PREC)<br />Sta. Barbara, Pangasinan');

    var stations = L.layerGroup([dingras, batac, sanjuan, bacnotan, rfo1, sual, stabarbara]);

    var openmap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}',
        {
            attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ', maxZoom: 16
        });

    var baseMaps = {
        "OpenStreetMap": openmap
    };
    var overlayMaps = {
        "Stations": stations
    };
    //var map = L.map('map').setView({ lon: 120.3209, lat: 16.6159 }, 7);
    var map = L.map('map', {
        center: [120.3209, 16.6159],
        zoom: 7,
        layers: [openmap, stations]
    });

    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);
    layerControl.addBaseLayer(openmap, "OpenMap");
    layerControl.addOverlay(stations, "Stations");
}