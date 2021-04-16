const titlesprovider = 'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png'
let mymap = L.map('map').setView([-33.416097, -63.616672], 5)

L.tileLayer(titlesprovider, {
   maxZoom:10,
}).addTo(mymap)

let marker2 = L.marker([-31.4135, -64.18105]).addTo(mymap)
marker2.bindPopup("<b>Sucursal 1</b><br>Cordoba").openPopup();

let marker3 = L.marker([-31.64881, -60.70868]).addTo(mymap)
marker3.bindPopup("<b>Sucursal 2</b><br>Santa Fe").openPopup();

let marker4 = L.marker([-32.89084, -68.82717]).addTo(mymap)
marker4.bindPopup("<b>Sucursal 3</b><br>Mendoza").openPopup();

let marker5 = L.marker([-29.41105, -66.85067]).addTo(mymap)
marker5.bindPopup("<b>Sucursal 4</b><br>La Rioja").openPopup();

let marker6 = L.marker([-31.5375, -68.53639]).addTo(mymap)
marker6.bindPopup("<b>Sucursal 5</b><br>San Juan").openPopup();

let marker1 = L.marker([-34.61315, -58.37723]).addTo(mymap)
marker1.bindPopup("<b>Casa Central</b><br>Buenos Aires").openPopup();

var overlayMaps = {
    "San Juan": marker6,
    "La Rioja": marker5,
    "Mendoza": marker4,
    "Santa Fe": marker3,
    "Cordoba": marker2,    
    "Buenos Aires": marker1,    
};
L.control.layers(overlayMaps).addTo(mymap);