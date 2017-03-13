// require(["esri/Map","esri/views/MapView","esri/layers/FeatureLayer","dojo/domReady!"], function(Map, MapView, FeatureLayer){
//   var map = new Map({
//     basemap: "streets",
//     });
//   var view = new MapView({
//     container: "viewDiv",
//     map: map,
//     zoom: 14,
//     // center: [-71.349444, 42.460278] // Concord Center
//     center: [-71.116734, 42.377061]
//     });
//   var fl = new FeatureLayer({
//     url: "https://gis.cambridgema.gov/arcgis/rest/services/DPWEmbeddedLayers/MapServer/3"
//   });
//   map.add(fl);
// });


var map = L.map("map").setView([-71.116734, 42.377061], 14);

L.esri.basemapLayer("Topographic").addTo(map)
