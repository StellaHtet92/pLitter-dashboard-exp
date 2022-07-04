// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
  var feature_name=name+"_"+id_Picture+1;
    var j,k,lat,lng;
  if (event.data == YT.PlayerState.PLAYING) {
   // To get the current playing time
    var time = event.target.getCurrentTime();
    //alert('onplayerstatechange')
    console.log(time);
    console.log('current time');
    console.log(name);
    console.log('current feature name');
    console.log(id_Picture);
    console.log('ID picture');
    console.log(start_time);
    console.log('Start Time');
    if(time-start_time>0.2)
        {
            alert('time-start_time');
         //geojson_array.feature   
         console.log("feature_name");
         console.log(feature_name);
         for(j=0;j<geojson_array.length;j++)
         {
            for (k=0;k<geojson_array[j].features[k].length;k++)
            {
                if(feature_name.localeCompare(geojson_array[j].features[k].properties.name)==0)
                {
                    var lng=geojson_array[j].features[k].geometry.coordinates[0];
                    var lat=geojson_array[j].features[k].geometry.coordinates[1];
                    console.log(lat);
                    console.log('lat onPlayerStateChange');
                    console.log(lng);
                    console.log('lng onPlayerStateChange');
                    
                    var items=[{"lat":lat,"lng":lng}];
     
                    itemWrap(items);
                    start_time=time;
                }
            }
           
         }
        }
     }
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
//var done = false;
function onPlayerStateChange(event) {
    var feature_name=name+"_"+id_Picture+1;
    var j,k,lat,lng;
  if (event.data == YT.PlayerState.PLAYING) {
   // To get the current playing time
    var time = event.target.getCurrentTime();
    //alert('onplayerstatechange')
    console.log(time);
    console.log('current time');
    console.log(name);
    console.log('current feature name');
    console.log(id_Picture);
    console.log('ID picture');
    console.log(start_time);
    console.log('Start Time');
    if(time-start_time>0.2)
        {
            alert('time-start_time');
         //geojson_array.feature   
         console.log("feature_name");
         console.log(feature_name);
         for(j=0;j<geojson_array.length;j++)
         {
            for (k=0;k<geojson_array[j].features[k].length;k++)
            {
                if(feature_name.localeCompare(geojson_array[j].features[k].properties.name)==0)
                {
                    var lng=geojson_array[j].features[k].geometry.coordinates[0];
                    var lat=geojson_array[j].features[k].geometry.coordinates[1];
                    console.log(lat);
                    console.log('lat onPlayerStateChange');
                    console.log(lng);
                    console.log('lng onPlayerStateChange');
                    
                    var items=[{"lat":lat,"lng":lng}];
     
                    itemWrap(items);
                    start_time=time;
                }
            }
            //if(geojson_array[j].data.)
         }
        }
     }
}
function stopVideo() {
  player.stopVideo();
}