export function loadmap() {
    //var map = new Microsoft.Maps.Map('#map', {
    //    center: new Microsoft.Maps.Location(16.6159,120.3269), zoom: 1
    //});
    var map = new Microsoft.Maps.Map(document.getElementById('map'), {});
    var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), null);
    map.entities.push(pushpin);
    return ""; 
    
} 