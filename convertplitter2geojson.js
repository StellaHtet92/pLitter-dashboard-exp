var geojson_array = [];
Object.keys(geojsonFeature).forEach((video => {
   //console.log(video);
   //
    var geojson = {"type": "FeatureCollection", "properties": {"video_path": geojsonFeature[video]["video_path"],"path_name":video}, "features": []};
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
    geojson_array.push(geojson);
}))


//console.log("geojson_array");
//console.log(geojson_array);