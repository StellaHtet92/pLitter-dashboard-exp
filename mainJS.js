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
var latlngs=[];var polyline;
function onEachFeature(feature, layer) {

layer.on('click', function (e) {
  var name=feature.properties.name.slice(0, 8);
  var id_Picture=feature.properties.name.slice(9, feature.properties.name.length-4);
  var max=0;
    console.log("Latitude:");
    console.log(feature.properties.latitude);
    console.log("longitude:");
    console.log(feature.properties.longitude);
    var time=Math.round(id_Picture*2.2);
    var player=document.getElementById('IPlayer');
    
    //layer.bindPopup(feature.properties.name);
    //link to download videos=>https://street.plitter.org/media/Can%20Tho/January_2022/your_path_name.MP4
    //<iframe allowfullscreen="" frameborder="0" height="315" src="http://www.youtube.com/embed/UkWd0azv3fQ?start=90" width="420"></iframe>
    if (name.localeCompare("GH010009")==0 )
    {
        document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/hgts0sn19oo?start='+time;
        // latlngs=[latlngs,[feature.properties.longitude,feature.properties.latitude]]
        // console.log('latlngs:'),console.log(latlngs);
        // polyline = L.polyline(latlngs, {color: 'red'}).addTo(map);
       

    }
    else if (name.localeCompare("GH010016")==0)
    {
        document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/rf2hyN3Kl9c?start='+time;
        // latlngs=[latlngs,[feature.properties.longitude,feature.properties.latitude]]
        // console.log('latlngs:'),console.log(latlngs);
        // polyline = L.polyline(latlngs, {color: 'yellow'}).addTo(map);
       
    }
    else if (name.localeCompare("GH010021")==0)
    {
        document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/GQix07cCRSQ?start='+time;
        // latlngs=[latlngs,[feature.properties.longitude,feature.properties.latitude]]
        // console.log('latlngs:'),console.log(latlngs);
        // polyline = L.polyline(latlngs, {color: 'blue'}).addTo(map);
       
    }
    else if (name.localeCompare("GH010022")==0)
    {
        document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/EBMiR8Z3gR4?start='+time;
        // latlngs=[latlngs,[feature.properties.longitude,feature.properties.latitude]]
        // console.log('latlngs:'),console.log(latlngs);
        // polyline = L.polyline(latlngs, {color: 'green'}).addTo(map);
       
    }
    else if (name.localeCompare("GH010025")==0)
    {
       document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/p82Om_A9f7g?start='+time;
    //    latlngs=[latlngs,[feature.properties.longitude,feature.properties.latitude]]
    //     console.log('latlngs:'),console.log(latlngs);
    //     polyline = L.polyline(latlngs, {color: 'orange'}).addTo(map);
       
    }
    else if (name.localeCompare("GH010027")==0)
    {
       document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/XnL-B1rnJfc?start='+time;
    //    latlngs=[latlngs,[feature.properties.longitude,feature.properties.latitude]]
    //     console.log('latlngs:'),console.log(latlngs);
    //     polyline = L.polyline(latlngs, {color: 'black'}).addTo(map);
        
    }
    else if (name.localeCompare("GH010028")==0)
    {
       document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/XvpN5_-vgr0?start='+time;
    //    latlngs=[latlngs,[feature.properties.longitude,feature.properties.latitude]]
    //     console.log('latlngs:'),console.log(latlngs);
    //     polyline = L.polyline(latlngs, {color: 'purple'}).addTo(map);
        
    }
        
   
    //https://youtu.be/JnN-gL3zKHk
    else if (name.localeCompare("GH030030")==0)
    {
        
        document.getElementById("IPlayer").src = 'https://www.youtube.com/embed/JnN-gL3zKHk?start='+time;
        // latlngs=[latlngs,[feature.properties.longitude,feature.properties.latitude]]
        // console.log('latlngs:'),console.log(latlngs);
        // polyline = L.polyline(latlngs, {color: 'teal'}).addTo(map);
       
    }
    else 
    {
        
        window.alert('Video not found');
        document.getElementById("IPlayer").style.display = 'hidden';
        
    }   
    document.getElementById("IPlayer").style.display = 'true';
   
    
});
}
var videosLayer=L.geoJSON(geojson_array, {
pointToLayer: function (feature, latlng) {
    return L.circleMarker(latlng, geojsonMarkerOptions);
}, 
onEachFeature: onEachFeature
});

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
        alert("checkID=1");
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
            alert("checkID=1");
          }
          
          else if(checkId==2)
          {
            map.removeLayer(videosLayer);
            
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
