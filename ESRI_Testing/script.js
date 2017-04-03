var map;
var view;
var template;

require(["esri/Map",
  "esri/views/MapView",
  "esri/layers/FeatureLayer",
  "esri/widgets/Search",

  "dojo/on",
  "dojo/dom",
  "dojo/domReady!"], function(Map, MapView, FeatureLayer, Search, on, dom){
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
    title: "Street Name: {Street_Name}",
    content:  [{
      type: "fields",
      fieldInfos:[{
        fieldName: "CurrentPlan",
        label: "Year"},
        {
        fieldName: "Webpage",
        label: "Webpage"
        }]
      }]
    }


  future_projs = new FeatureLayer({
     url: "https://gis.cambridgema.gov/arcgis/rest/services/DPWEmbeddedLayers/MapServer/5",
    outFields: ["*"],
    popupTemplate: template
   });
   map.add(future_projs);
  current_projs = new FeatureLayer({
      url: "https://gis.cambridgema.gov/arcgis/rest/services/DPWEmbeddedLayers/MapServer/6",
      outFields: ["*"],
      popupTemplate: template
    });
   map.add(current_projs);
  past_projs = new FeatureLayer({
       url: "https://gis.cambridgema.gov/arcgis/rest/services/DPWEmbeddedLayers/MapServer/7",
       outFields: ["*"],
       popupTemplate: template
     });
   map.add(past_projs);


  var searchWid = new Search({
    view: view
  });


  //Add search widget to top left corner
  view.ui.add(searchWid,{
    position: "top-left",
    index: 0
  });

  //  Change basemap
    on(dom.byId("btnStreets"),"click", function() {
      map.basemap = "streets";
    });
    on(dom.byId("btnSatellite"),"click", function() {
      map.basemap ="satellite";
    });
    on(dom.byId("btnHybrid"),"click", function() {
     map.basemap ="hybrid";
    });
    on(dom.byId("btnTopo"),"click", function() {
     map.basemap ="topo";
    });
    on(dom.byId("btnGray"),"click", function() {
      map.basemap ="gray";
    });
    on(dom.byId("btnNatGeo"),"click", function() {
      map.basemap = "national-geographic";
    });
});
