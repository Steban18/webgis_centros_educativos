var map = L.map('map', {
    center: [-17.645875, -71.345271],
    zoom: 18,
    minZoom: 10,
    maxZoom: 20,
    maxBounds: [[-17.8681,-71.5245], [-15.9593,-69.9777]]
});

var basemapOSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <ahref="http://osm.org/copyright"> OpenStreetMap</a> contributor'
});
basemapOSM.addTo(map);

//*****************LISTA DE SERVICIOS*******************************//
var departamento = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:departamento_moquegua", //gisweb:provincias de Moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
departamento.addTo(map);

var provincias = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:provincias_moquegua", //gisweb:provincias de Moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
provincias.addTo(map);

var distritos = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:distritos_moquegua", //gisweb:ditritos de Moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
distritos.addTo(map);

var centros = L.tileLayer.wms("http://localhost:8080/geoserver/proyecto_webgis/wms?", {
	   layers: "proyecto_webgis:centros_educativos_moquegua_ilo", //gisweb:centros educativos moquegua
	   format: 'image/png',
	   transparent: true,
	   version: '1.1.1',
	   attribution: "SENCICO"
	});
centros.addTo(map);


var baseMaps = {
    "OSM": basemapOSM
};

var overlayMaps = {
    "Centros educativos": centros,
    "Distritos Moquegua": distritos,
    "Provincias Moquegua": provincias,
    "Departamento Moquegua": departamento
};

L.control.layers(baseMaps, overlayMaps,{
    position: 'topright', // 'topleft', 'bottomleft', 'bottomright'
    collapsed: false // true
}).addTo(map);

L.control.scale({
  imperial: false
}).addTo(map);