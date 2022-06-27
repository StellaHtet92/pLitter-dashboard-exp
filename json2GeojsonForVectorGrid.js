//use with convert2GeoJsonNdownload.html file
var geoJSONFeaturesForVectorGrid = [];
Object.keys(geojsonFeature).forEach((video => {
   //console.log(video);
   //
    var geojson = {"type": "FeatureCollection", "features": []};
    //console.log(geojson);
    geojsonFeature[video]["geom"].map((point) => {
   // console.log(di);
        geojson["features"].push({
           "type": "Feature",
           "geometry": {
               "type": "Point",
               "coordinates": [point["longitude"], point["latitude"]]
           },
           "properties": {
               "name": point["name"],
               "count": point["count"],
               "Plastic": point["Plastic"],
               "Pile": point["Pile"],
               "Face mask": point["Face mask"],
               "Trash bin": point["Trash bin"],
           }
       });
    });
    geoJSONFeaturesForVectorGrid.push(geojson);
}))


//console.log("geojson_array");
//console.log(geojson_array);

$(".download-geojson-btn").click(function () {
  requiredData =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(geoJSONFeaturesForVectorGrid));
  $(this).attr("href", requiredData);
});