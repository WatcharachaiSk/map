ol.proj.proj4.register(proj4);
ol.proj
  .get("EPSG:32648")
  .setExtent([259107.519281, 1815378.97462, 276207.220924, 1824046.099685]);
var wms_layers = [];

var lyr_GoogleMaps_0 = new ol.layer.Tile({
  title: "Google Maps",
  type: "base",
  opacity: 1.0,

  source: new ol.source.XYZ({
    attributions: " ",
    url: "https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}",
  }),
});
var format_Buffered5km_1 = new ol.format.GeoJSON();
var features_Buffered5km_1 = format_Buffered5km_1.readFeatures(
  json_Buffered5km_1,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:32648" }
);
var jsonSource_Buffered5km_1 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_Buffered5km_1.addFeatures(features_Buffered5km_1);
var lyr_Buffered5km_1 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_Buffered5km_1,
  style: style_Buffered5km_1,
  popuplayertitle: "สถานที่สร้างBuffered 5 km.",
  interactive: true,
  title:
    '<img src="styles/legend/Buffered5km_1.png" /> สถานที่สร้างBuffered 5 km.',
});
var format_Buffered1km_2 = new ol.format.GeoJSON();
var features_Buffered1km_2 = format_Buffered1km_2.readFeatures(
  json_Buffered1km_2,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:32648" }
);
var jsonSource_Buffered1km_2 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_Buffered1km_2.addFeatures(features_Buffered1km_2);
var lyr_Buffered1km_2 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_Buffered1km_2,
  style: style_Buffered1km_2,
  popuplayertitle: "สถานที่สร้างBuffered 1 km.",
  interactive: true,
  title:
    '<img src="styles/legend/Buffered1km_2.png" /> สถานที่สร้างBuffered 1 km.',
});
var format_Intersection_3 = new ol.format.GeoJSON();
var features_Intersection_3 = format_Intersection_3.readFeatures(
  json_Intersection_3,
  { dataProjection: "EPSG:4326", featureProjection: "EPSG:32648" }
);
var jsonSource_Intersection_3 = new ol.source.Vector({
  attributions: " ",
});
jsonSource_Intersection_3.addFeatures(features_Intersection_3);
var lyr_Intersection_3 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource_Intersection_3,
  style: style_Intersection_3,
  popuplayertitle: "Intersection",
  interactive: true,
  title: '<img src="styles/legend/Intersection_3.png" /> Intersection',
});
var format__4 = new ol.format.GeoJSON();
var features__4 = format__4.readFeatures(json__4, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:32648",
});
var jsonSource__4 = new ol.source.Vector({
  attributions: " ",
});
jsonSource__4.addFeatures(features__4);
var lyr__4 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource__4,
  style: style__4,
  popuplayertitle: "อาคารและสิ่งปลูกสร้าง",
  interactive: true,
  title: '<img src="styles/legend/_4.png" /> อาคารและสิ่งปลูกสร้าง',
});
var format__5 = new ol.format.GeoJSON();
var features__5 = format__5.readFeatures(json__5, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:32648",
});
var jsonSource__5 = new ol.source.Vector({
  attributions: " ",
});
jsonSource__5.addFeatures(features__5);
var lyr__5 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource__5,
  style: style__5,
  popuplayertitle: "ถนนในเมือง",
  interactive: true,
  title: '<img src="styles/legend/_5.png" /> ถนนในเมือง',
});
var format__6 = new ol.format.GeoJSON();
var features__6 = format__6.readFeatures(json__6, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:32648",
});
var jsonSource__6 = new ol.source.Vector({
  attributions: " ",
});
jsonSource__6.addFeatures(features__6);
var lyr__6 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource__6,
  style: style__6,
  popuplayertitle: "โรงเรียนในเมือง",
  interactive: true,
  title: '<img src="styles/legend/_6.png" /> โรงเรียนในเมือง',
});
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:32648",
});
var jsonSource__7 = new ol.source.Vector({
  attributions: " ",
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource__7,
  style: style__7,
  popuplayertitle: "หมู่บ้านในเมือง",
  interactive: true,
  title: '<img src="styles/legend/_7.png" /> หมู่บ้านในเมือง',
});
var format__8 = new ol.format.GeoJSON();
var features__8 = format__8.readFeatures(json__8, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:32648",
});
var jsonSource__8 = new ol.source.Vector({
  attributions: " ",
});
jsonSource__8.addFeatures(features__8);
var lyr__8 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource__8,
  style: style__8,
  popuplayertitle: "โรงพยาบาลในเมือง",
  interactive: true,
  title: '<img src="styles/legend/_8.png" /> โรงพยาบาลในเมือง',
});
var format__9 = new ol.format.GeoJSON();
var features__9 = format__9.readFeatures(json__9, {
  dataProjection: "EPSG:4326",
  featureProjection: "EPSG:32648",
});
var jsonSource__9 = new ol.source.Vector({
  attributions: " ",
});
jsonSource__9.addFeatures(features__9);
var lyr__9 = new ol.layer.Vector({
  declutter: true,
  source: jsonSource__9,
  style: style__9,
  popuplayertitle: "พื้นที่สำหรับสร้างห้างสรรพสินค้าแห่งใหม่",
  interactive: true,
  title:
    '<img src="styles/legend/_9.png" /> พื้นที่สำหรับสร้างห้างสรรพสินค้าแห่งใหม่',
});

lyr_GoogleMaps_0.setVisible(true);
lyr_Buffered5km_1.setVisible(true);
lyr_Buffered1km_2.setVisible(true);
lyr_Intersection_3.setVisible(true);
lyr__4.setVisible(true);
lyr__5.setVisible(true);
lyr__6.setVisible(true);
lyr__7.setVisible(true);
lyr__8.setVisible(true);
lyr__9.setVisible(true);
var layersList = [
  lyr_GoogleMaps_0,
  lyr_Buffered5km_1,
  lyr_Buffered1km_2,
  lyr_Intersection_3,
  lyr__4,
  lyr__5,
  lyr__6,
  lyr__7,
  lyr__8,
  lyr__9,
];
lyr_Buffered5km_1.set("fieldAliases", { id: "id", "พื้�": "พื้�" });
lyr_Buffered1km_2.set("fieldAliases", { id: "id", "พื้�": "พื้�" });
lyr_Intersection_3.set("fieldAliases", {
  osm_id: "osm_id",
  name: "name",
  ref: "ref",
  type: "type",
  oneway: "oneway",
  bridge: "bridge",
  maxspeed: "maxspeed",
  id: "id",
  "สิ่�": "สิ่�",
});
lyr__4.set("fieldAliases", { osm_id: "osm_id", name: "name", type: "type" });
lyr__5.set("fieldAliases", {
  fid: "fid",
  Name: "Name",
  descriptio: "descriptio",
  timestamp: "timestamp",
  begin: "begin",
  end: "end",
  altitudeMo: "altitudeMo",
  tessellate: "tessellate",
  extrude: "extrude",
  visibility: "visibility",
  drawOrder: "drawOrder",
  icon: "icon",
  snippet: "snippet",
});
lyr__6.set("fieldAliases", {
  fid: "fid",
  Name: "Name",
  descriptio: "descriptio",
  timestamp: "timestamp",
  begin: "begin",
  end: "end",
  altitudeMo: "altitudeMo",
  tessellate: "tessellate",
  extrude: "extrude",
  visibility: "visibility",
  drawOrder: "drawOrder",
  icon: "icon",
  snippet: "snippet",
});
lyr__7.set("fieldAliases", {
  fid: "fid",
  Name: "Name",
  descriptio: "descriptio",
  timestamp: "timestamp",
  begin: "begin",
  end: "end",
  altitudeMo: "altitudeMo",
  tessellate: "tessellate",
  extrude: "extrude",
  visibility: "visibility",
  drawOrder: "drawOrder",
  icon: "icon",
  snippet: "snippet",
});
lyr__8.set("fieldAliases", { fid: "fid", NAME: "NAME", X: "X", Y: "Y" });
lyr__9.set("fieldAliases", { id: "id", "พื้�": "พื้�" });
lyr_Buffered5km_1.set("fieldImages", { id: "TextEdit", "พื้�": "TextEdit" });
lyr_Buffered1km_2.set("fieldImages", { id: "TextEdit", "พื้�": "TextEdit" });
lyr_Intersection_3.set("fieldImages", {
  osm_id: "",
  name: "",
  ref: "",
  type: "",
  oneway: "",
  bridge: "",
  maxspeed: "",
  id: "",
  "สิ่�": "",
});
lyr__4.set("fieldImages", { osm_id: "", name: "", type: "" });
lyr__5.set("fieldImages", {
  fid: "",
  Name: "",
  descriptio: "",
  timestamp: "",
  begin: "",
  end: "",
  altitudeMo: "",
  tessellate: "",
  extrude: "",
  visibility: "",
  drawOrder: "",
  icon: "",
  snippet: "",
});
lyr__6.set("fieldImages", {
  fid: "TextEdit",
  Name: "TextEdit",
  descriptio: "TextEdit",
  timestamp: "TextEdit",
  begin: "TextEdit",
  end: "TextEdit",
  altitudeMo: "TextEdit",
  tessellate: "TextEdit",
  extrude: "TextEdit",
  visibility: "TextEdit",
  drawOrder: "TextEdit",
  icon: "TextEdit",
  snippet: "TextEdit",
});
lyr__7.set("fieldImages", {
  fid: "TextEdit",
  Name: "TextEdit",
  descriptio: "TextEdit",
  timestamp: "TextEdit",
  begin: "TextEdit",
  end: "TextEdit",
  altitudeMo: "TextEdit",
  tessellate: "TextEdit",
  extrude: "TextEdit",
  visibility: "TextEdit",
  drawOrder: "TextEdit",
  icon: "TextEdit",
  snippet: "TextEdit",
});
lyr__8.set("fieldImages", {
  fid: "TextEdit",
  NAME: "TextEdit",
  X: "TextEdit",
  Y: "TextEdit",
});
lyr__9.set("fieldImages", { id: "TextEdit", "พื้�": "TextEdit" });
lyr_Buffered5km_1.set("fieldLabels", {
  id: "inline label - always visible",
  "พื้�": "inline label - always visible",
});
lyr_Buffered1km_2.set("fieldLabels", {
  id: "inline label - always visible",
  "พื้�": "inline label - always visible",
});
lyr_Intersection_3.set("fieldLabels", {
  osm_id: "inline label - always visible",
  name: "inline label - always visible",
  ref: "inline label - always visible",
  type: "inline label - always visible",
  oneway: "inline label - always visible",
  bridge: "inline label - always visible",
  maxspeed: "inline label - always visible",
  id: "inline label - always visible",
  "สิ่�": "inline label - always visible",
});
lyr__4.set("fieldLabels", {
  osm_id: "inline label - always visible",
  name: "inline label - always visible",
  type: "inline label - always visible",
});
lyr__5.set("fieldLabels", {
  fid: "inline label - always visible",
  Name: "inline label - always visible",
  descriptio: "inline label - always visible",
  timestamp: "inline label - always visible",
  begin: "inline label - always visible",
  end: "inline label - always visible",
  altitudeMo: "inline label - always visible",
  tessellate: "inline label - always visible",
  extrude: "inline label - always visible",
  visibility: "inline label - always visible",
  drawOrder: "inline label - always visible",
  icon: "inline label - always visible",
  snippet: "inline label - always visible",
});
lyr__6.set("fieldLabels", {
  fid: "inline label - always visible",
  Name: "inline label - always visible",
  descriptio: "inline label - always visible",
  timestamp: "inline label - always visible",
  begin: "inline label - always visible",
  end: "inline label - always visible",
  altitudeMo: "inline label - always visible",
  tessellate: "inline label - always visible",
  extrude: "inline label - always visible",
  visibility: "inline label - always visible",
  drawOrder: "inline label - always visible",
  icon: "inline label - always visible",
  snippet: "inline label - always visible",
});
lyr__7.set("fieldLabels", {
  fid: "inline label - always visible",
  Name: "inline label - always visible",
  descriptio: "inline label - always visible",
  timestamp: "inline label - always visible",
  begin: "inline label - always visible",
  end: "inline label - always visible",
  altitudeMo: "inline label - always visible",
  tessellate: "inline label - always visible",
  extrude: "inline label - always visible",
  visibility: "inline label - always visible",
  drawOrder: "inline label - always visible",
  icon: "inline label - always visible",
  snippet: "inline label - always visible",
});
lyr__8.set("fieldLabels", {
  fid: "inline label - always visible",
  NAME: "inline label - always visible",
  X: "inline label - always visible",
  Y: "inline label - always visible",
});
lyr__9.set("fieldLabels", {
  id: "inline label - always visible",
  "พื้�": "inline label - always visible",
});
lyr__9.on("precompose", function (evt) {
  evt.context.globalCompositeOperation = "normal";
});
