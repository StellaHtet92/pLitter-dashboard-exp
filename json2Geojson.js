let features = [];

 console.log(geojsonFeature);
const output = geojsonFeature.branch_data.map((element) => {
  var rdata = {
    type: "Feature",
    properties: {
        Face_mask: element."Face mask",
        Pile: element."Pile",
        Plastic: element."Plastic",
        Trash_bin:element."Trash bin",
        count:element."count",
        name:element."name"
    },
    geometry: {
      type: "Point",
      coordinates: [
        parseFloat(element.longitude),
        parseFloat(element.latitude),
      ],
    },
  };
     console.log(rdata);
  features.push(rdata);
});

console.log(features);

const geoJSON = {
  type: "FeatureCollection",
  features: features,
};

console.log(geoJSON);

$(".download-geojson-btn").click(function () {
  requiredData =
    "data:text/json;charset=utf-8," +
    encodeURIComponent(JSON.stringify(geoJSON));
  $(this).attr("href", requiredData);
});