var map;
var view;
var template;
// var popup;
require(["esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",

  // "esri/widgets/Popup",
  // "esri/PopupTemplate",
  "dojo/domReady!"], function(Map, MapView, FeatureLayer){
  map = new Map({
    basemap: "streets" ,
    });
  view = new MapView({
    container: "viewDiv",
    map: map,
    zoom: 14,
    // center: [-71.349444, 42.460278] // Concord Center
    center: [-71.116734, 42.377061]
    });


  template = {
    title: "Test",
    content: "{Street_Name}"
  }

  future_projs = new FeatureLayer({
     url: "https://gis.cambridgema.gov/arcgis/rest/services/DPWEmbeddedLayers/MapServer/5",
    outFields: ["*"],
     popupTemplate: template
   });
   map.add(future_projs);
  // current_projs = new FeatureLayer({
  //     url: "https://gis.cambridgema.gov/arcgis/rest/services/DPWEmbeddedLayers/MapServer/6"
  //   });
  //  map.add(current_projs);
  // past_projs = new FeatureLayer({
  //      url: "https://gis.cambridgema.gov/arcgis/rest/services/DPWEmbeddedLayers/MapServer/7"
  //    });
  //  map.add(past_projs);




});


// var map;
// var view;
// require(["esri/Map",
//       "esri/views/MapView",
//       "dojo/on",
//       "dojo/dom",
//       "dojo/domReady!"], function(Map, MapView, on, dom){
//     // Create map
//     map = new Map({
//       basemap: "streets",
//     });
//     view = new MapView({
//       container: "viewDiv",
//       map: map,
//       zoom: 14,
//       // center: [-71.349444, 42.460278] // Concord Center
//       center: [-71.116734, 42.377061]
//       });
//
//     // Wire UI Events
//     on(dom.byId("btnStreets"),"click", function() {
//       map.setBasemap("streets");
//     });
//     on(dom.byId("btnSatellite"),"click", function() {
//       map.setBasemap("satellite");
//     });
//     on(dom.byId("btnHybrid"),"click", function() {
//       map.setBasemap("hybrid");
//     });
//     on(dom.byId("btnTopo"),"click", function() {
//       map.setBasemap("topo");
//     });
//     on(dom.byId("btnGray"),"click", function() {
//       map.setBasemap("gray");
//     });
//     on(dom.byId("btnNatGeo"),"click", function() {
//       map.setBasemap("national-geographic");
//     });
// });
