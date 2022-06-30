//comment from Coco: this is not working
var latlng_array = [];
var lat,lng;
var newPoint;
Object.keys(geojson_array).forEach((FeatureCollection => {
   //console.log(video);
   //
   geojson_array[FeatureCollection]["geometry"].map((point) => {
   // console.log(di);
        lng=point["longitude"];
        lat=point["latitude"];
        newPoint= new L.LatLng(lng,lat);
    });
    latlng_array.push(newPoint);
}))


//console.log("geojson_array");
//console.log(geojson_array);

$(".download-geojson-btn").click(function () {
  requiredData =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(latlng_array));
  $(this).attr("href", requiredData);
});