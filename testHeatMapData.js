function getTestData() {
  // var heatmap_array = [];
var geojson = {"max": 1960, "data": []};
   
Object.keys(geojsonFeature).forEach((video => {
  console.log(video); 
  
   geojsonFeature[video]["geom"].map((point) => {
   //console.log('Point from getTestData');
   //console.log(point);
       geojson["data"].push({
           "longitude":point["longitude"],
           "latitude":point["latitude"],
           "count": point["count"]       
          
      });
   });
   console.log('Geojson from getTestData Function');
   console.log(geojson); 
  // heatmap_array.push(geojson);
}))
return geojson;
}