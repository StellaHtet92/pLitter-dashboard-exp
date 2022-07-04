//for iframe player api
var tag = document.createElement('script');
tag.id = 'iframe-demo';
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
//end of iframe player api
//declaration of variables
var marker=new Array();
var i;
var latlngs=[];var polyline;
var name;
var id_Picture;
var start_time;
var layerscontrol;
//end
var map = L.map('map').setView([10.0042388, 105.7902111], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
maxZoom: 18,
id: 'mapbox/streets-v11',
tileSize: 512,
zoomOffset: -1,
accessToken: 'pk.eyJ1IjoiaHRldHlhbWluIiwiYSI6ImNrZmRyYnpqMzAxOTEycXBhdXA3MnVpOTMifQ.FLWujZQkT6BeMcSIQz0a8Q'
}).addTo(map);

var geojsonMarkerOptions = {
radius: 4,
fillColor: "#ff0000",
color: "#000",
weight: 1,
opacity: 1,
fillOpacity: 0.8
};
//adding and removing marker

function itemWrap(items) {
   
for(i=0;i<items.length;i++){
   
    var LamMarker = new L.marker([items[i].lat, items[i].lng]);
    marker=new Array();
    marker.push(LamMarker);
    map.addLayer(LamMarker);
    }
}

/*Going through these marker-items again removing them
code from https://stackoverflow.com/questions/9912145/leaflet-how-to-find-existing-markers-and-delete-markers*/
function markerDelAgain() {
   
    
    for(var i=0;i<marker.length;i++) {
    
    map.removeLayer(marker[i]);
   // alert('markerDelAgain');
    }  
   
    
}
//end of adding and removing marker

function onEachFeature(feature, layer) {
  
    layer.on('click', function (e) {  

      name=feature.properties.name.slice(0, 8);
      console.log('name');
      console.log(name);
      id_Picture=feature.properties.name.slice(9, feature.properties.name.length-4);
      var lng=feature.geometry.coordinates[0];
      //console.log(lat);
      //console.log('lat');
      var lat=feature.geometry.coordinates[1];
      //console.log(lng);
     // console.log('lng');
     markerDelAgain();
      var items=[{"lat":lat,"lng":lng}];
     
      itemWrap(items);
      start_time=Math.round(id_Picture*2.2);
        console.log("Time");
        console.log(start_time);
        //for iframe player
       
        var player;

        
        //layer.bindPopup(feature.properties.name);
        //link to download videos=>https://street.plitter.org/media/Can%20Tho/January_2022/your_path_name.MP4
        //<iframe allowfullscreen="" frameborder="0" height="315" src="http://www.youtube.com/embed/UkWd0azv3fQ?start=90" width="420"></iframe>
       if (name.localeCompare("GH010009")==0 )
      // if(name=="GH010009")
        {
            player = new YT.Player('IPlayer', {
                    height: '390',
                    width: '640',
                    videoId: 'hgts0sn19oo',
                    playerVars: {
                    'playsinline': 1
                    },
                    events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        start: start_time,
                        end: 60
                    }
                });
                document.getElementById("IPlayer").style.visibility = 'visible';

        }
        //else if (name.localeCompare("GH010016")==0)
        else if(name.localeCompare("GH010016")==0)
        {
           // document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/rf2hyN3Kl9c?start='+time;
          
         
            player = new YT.Player('IPlayer', {
                    height: '390',
                    width: '640',
                    videoId: 'rf2hyN3Kl9c',
                    playerVars: {
                    'playsinline': 1
                    },
                    events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        start: start_time,
                        end: 60
                    }
                });
                document.getElementById("IPlayer").style.visibility = 'visible';
                
           
        }
        else if (name.localeCompare("GH010021")==0)
        {
         
          player = new YT.Player('IPlayer', {
                    height: '390',
                    width: '640',
                    videoId: 'GQix07cCRSQ',
                    playerVars: {
                    'playsinline': 1
                    },
                    events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        start: start_time,
                        end: 60
                    }
                });
                document.getElementById("IPlayer").style.visibility = 'visible';
                
           
        }
        else if (name.localeCompare("GH010022")==0)
        {
     
            player = new YT.Player('IPlayer', {
                    height: '390',
                    width: '640',
                    videoId: 'EBMiR8Z3gR4',
                    playerVars: {
                    'playsinline': 1
                    },
                    events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        start: start_time,
                        end: 60
                    }
                });
                document.getElementById("IPlayer").style.visibility = 'visible';
           
        }
        else if (name.localeCompare("GH010025")==0)
        {
         
          player = new YT.Player('IPlayer', {
                    height: '390',
                    width: '640',
                    videoId: 'p82Om_A9f7g',
                    playerVars: {
                    'playsinline': 1
                    },
                    events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        start: start_time,
                        end: 60
                    }
                });
                document.getElementById("IPlayer").style.visibility = 'visible';
           
        }
        else if (name.localeCompare("GH010027")==0)
        {
          //document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/XnL-B1rnJfc?start='+time;
          // player=onYouTubeIframeAPIReady('XnL-B1rnJfc');
        // playTime = player.getCurrentTime();
        // console.log(playTime);
         player = new YT.Player('IPlayer', {
                    height: '390',
                    width: '640',
                    videoId: 'XnL-B1rnJfc',
                    playerVars: {
                    'playsinline': 1
                    },
                    events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        start: start_time,
                        end: 60
                    }
                });
                document.getElementById("IPlayer").style.visibility = 'visible';
            
        }
        else if (name.localeCompare("GH010028")==0)
        {
         
        player = new YT.Player('IPlayer', {
                    height: '390',
                    width: '640',
                    videoId: 'XvpN5_-vgr0',
                    playerVars: {
                    'playsinline': 1
                    },
                    events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        start: start_time,
                        end: 60
                    }
                });
                document.getElementById("IPlayer").style.visibility = 'visible';
            
        }
            
       
        //https://youtu.be/JnN-gL3zKHk
        else if (name.localeCompare("GH030030")==0)
        {
         
           player = new YT.Player('IPlayer', {
                    height: '390',
                    width: '640',
                    videoId: 'JnN-gL3zKHk',
                    playerVars: {
                    'playsinline': 1
                    },
                    events: {
                    'onReady': onPlayerReady,
                    'onStateChange': onPlayerStateChange
                    },
                    playerVars: {
                        start: start_time,
                        end: 60
                    }
                });
                document.getElementById("IPlayer").style.visibility = 'visible';
           
        }
        else 
        {
            //document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/hgts0sn19oo'+'?start='+id_Picture;
            //max= getMax(name);
            //console.log("Max of Feature of that route:");
            //window.alert('Video not found');
            document.getElementById("IPlayer").style.display = 'hidden';
            
        }   
        document.getElementById("IPlayer").style.display = 'true';
       
        //map.removeLayer(marker);  
    });
}

var videosLayer=L.geoJSON(geojson_array, {
pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
}, 
onEachFeature: onEachFeature
});
videosLayer.addTo(map);
//end of video layer
//start for polyline layer
//code from https://gis.stackexchange.com/questions/29833/drawing-polyline-in-leaflet
function getPointList(geojson_array) {
    /*console.log('geojson_array');
    console.log(geojson_array);*/
    var point,smallpolyline,i,j,lat,lng,point;
    var polylineList=[];
    var pointList=[];
    var colours=['#800026','#E31A1C','#FEB24C','#B2FE4C','#FFEDA0','#9FA8DA']
    for (i=0 ; i<geojson_array.length ; i++) {
        pointList=[];
        for (j=0; j<geojson_array[i].features.length; j++)
        {
            lat=geojson_array[i].features[j].geometry.coordinates[0];
            lng=geojson_array[i].features[j].geometry.coordinates[1];
            point=new L.LatLng(lng,lat);
            pointList.push(point);
            /*console.log('point');
            console.log(point);*/
        }
    smallpolyline = new L.Polyline(pointList, {
    color: colours[i],
    weight: 5,
    opacity: 1,
    smoothFactor: 1
    });
    polylineList.push(smallpolyline);
    }    
    return polylineList;
}

//end of polyline layer
//start of heat map layer

//end of heat map layer
//original code from https://gis.stackexchange.com/questions/356961/checkbox-actions-with-a-leaflet-map updated by Coco
//selId = null;
function processCheck(checkbox) {
    var checkId = checkbox.id;
  
    if (checkbox.checked) {
      if (checkId==1) {
        heatMapGeneration();
      }
      
      else if(checkId==2)
      {
        videosLayer.addTo(map);
        
      }
      else if(checkId==3)
      {
        var polylineList=getPointList(geojson_array);
        for (var i=0; i<polylineList.length; i++)
        {
            polylineList[i].addTo(map);
        }
      }
      }
      

    else {
        if (checkId==1) {
          layersControl.remove(map);
            map.eachLayer(function (layer) {
              console.log(layer);
              console.log('checkID==1')
                // do something with the layer
                //if(layer.name.localeCompare("heatmapLayerCount")==0)
                //{
                //  map.removeLayer("heatmapLayerCount");
               // }
            });
          }
          
          else if(checkId==2)
          {
            map.removeLayer(videosLayer);
            window.parent.ClosePop();
          }
          else if(checkId==3)
          {
            var polylineList=getPointList(geojson_array);
            for (var i=0; i<polylineList.length; i++)
            {
                map.removeLayer(polylineList[i]);
                
            }
            
          }
     
      
    }
  }

function heatMapGeneration()
  {
      //alert('heatMap generation');
var cfgCount = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    // if scaleRadius is false it will be the constant radius used in pixels
    "radius": 0.0001,
    "maxOpacity": .9,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'latitude',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'longitude',
    // which field name in your data represents the data value - default "value"
    valueField: 'count'
  };
  var cfgPlastic = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    // if scaleRadius is false it will be the constant radius used in pixels
    "radius": 0.0001,
    "maxOpacity": .9,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'latitude',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'longitude',
    // which field name in your data represents the data value - default "value"
    valueField: 'Plastic'
  };
  var cfgPile = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    // if scaleRadius is false it will be the constant radius used in pixels
    "radius": 0.0001,
    "maxOpacity": .9,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'latitude',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'longitude',
    // which field name in your data represents the data value - default "value"
    valueField: 'Pile'
  };
  var cfgFaceMask = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    // if scaleRadius is false it will be the constant radius used in pixels
    "radius": 0.0001,
    "maxOpacity": .9,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'latitude',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'longitude',
    // which field name in your data represents the data value - default "value"
    valueField: 'Face mask'
  };
  var cfgTrashBin = {
    // radius should be small ONLY if scaleRadius is true (or small radius is intended)
    // if scaleRadius is false it will be the constant radius used in pixels
    "radius": 0.0001,
    "maxOpacity": .9,
    // scales the radius based on map zoom
    "scaleRadius": true,
    // if set to false the heatmap uses the global maximum for colorization
    // if activated: uses the data maximum within the current map boundaries
    //   (there will always be a red spot with useLocalExtremas true)
    "useLocalExtrema": true,
    // which field name in your data represents the latitude - default "lat"
    latField: 'latitude',
    // which field name in your data represents the longitude - default "lng"
    lngField: 'longitude',
    // which field name in your data represents the data value - default "value"
    valueField: 'Trash bin'
  };
  var testData=getTestData();
  //console.log('testData');
  //console.log(testData);
  var heatmapLayerCount = new HeatmapOverlay(cfgCount);
  var heatmapLayerPlastic = new HeatmapOverlay(cfgPlastic);
  var heatmapLayerPile = new HeatmapOverlay(cfgPile);
  var heatmapLayerFaceMask = new HeatmapOverlay(cfgFaceMask);
  var heatmapLayerTrashBin = new HeatmapOverlay(cfgTrashBin);
  var heatMaps={heatmapLayerCount,heatmapLayerPlastic,heatmapLayerPile,heatmapLayerFaceMask,heatmapLayerTrashBin};
  layersControl=L.control.layers({},{
      
      "Count": heatmapLayerCount, 
      "Plastic": heatmapLayerPlastic,
      "Pile":heatmapLayerPile,
      "Face mask":heatmapLayerFaceMask,
      "Trash Bin":heatmapLayerTrashBin
  },{collapsed:false});
  layersControl.addTo(map);
  //console.log("testData Array");
  //console.log(testData)
  heatmapLayerCount.setData(testData);
  heatmapLayerPlastic.setData(testData);
  heatmapLayerPile.setData(testData);
  heatmapLayerFaceMask.setData(testData);
  heatmapLayerTrashBin.setData(testData);
  }

  function getTestData() {
    // var heatmap_array = [];
 var geojson = {"max": 1960, "data": []};
     
 Object.keys(geojsonFeature).forEach((video => {
    console.log(video); 
    
     geojsonFeature[video]["geom"].map((point) => {
     //console.log('Point from getTestData');
     //console.log(point);
         geojson["data"].push({
             "name": point["name"],
             "longitude":point["longitude"],
             "latitude":point["latitude"],
             "count": point["count"],     
             "Plastic": point["Plastic"],
             "Pile": point["Pile"],
             "Face mask": point["Face mask"],
             "Trash bin": point["Trash bin"],       
            
        });
     });
     console.log('Geojson from getTestData Function');
     console.log(geojson); 
    // heatmap_array.push(geojson);
 }))
 return geojson;
 }

 //for closing iframe
 function ClosePop() {
    var container = document.getElementById("container");
    console.log('container from document.getElementsById');
    console.log(container);
    var iframe = document.getElementById("IPlayer");
    console.log('IPlayer from document.getElementsById');
    console.log(iframe);
   // document.body.removeChild(layer); // remove layer
   container.removeChild(iframe); // remove div
    
}