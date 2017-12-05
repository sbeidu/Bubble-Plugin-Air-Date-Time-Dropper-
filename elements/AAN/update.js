function(instance, properties, context) {
  var div;
  div = instance.data.div;
  var id = instance.data.id;  
  $("#"+id ).timeDropper({
    format: getTimeFormat(),
    autoswitch: properties.autoswitch,
    meridians: properties.meridians,
    mousewheel: properties.mousewheel,
    setCurrentTime: properties.setcurrenttime,
    init_animation: properties.init_animation,
    primaryColor: properties.primarycolor,
    borderColor: properties.bordercolor,
    backgroundColor: properties.backgroundcolor,
    textColor:properties.textcolor
  });
  
  function getTimeFormat(){
    var val = properties.format;
    if (val == '3:09 pm') return "h:mm a" ;
    else if (val == '3:09 PM') return "h:mm A";
    else if (val == '15:09') return "HH:mm";
    else if (val == '3:9 pm') return "h:m a";
    else if (val == '3:9 PM') return "h:m A";
    else if (val == '03:09 AM') return "hh:mm A";
  }
  
  $('.td-overlay').on('touchend mouseup', function() {
    var value = document.getElementById(id).value;
    instance.publishState('value', value);
    instance.publishState('hours', parseTime(value)[0]);
    instance.publishState('minutes', parseTime(value)[1]);
  });
  
    function parseTime(timeStr, dt) {
    var vals =[]
     // if (!dt) {
     //     dt = new Date();
     // }
      var time = timeStr.match(/(\d+)(?::(\d\d))?\s*(p?)/i);
      if (!time) {
          return null;
      }
      var hours = parseInt(time[1], 10);
      if (hours == 12 && !time[3]) {
          hours = 0;
      }
      else {
          hours += (hours < 12 && time[3]) ? 12 : 0;
      }
      var minutes = parseInt(time[2], 10) || 0;

      //dt.setHours(hours);
      //dt.setMinutes(minutes);
      //dt.setSeconds(0, 0);
      vals[0] = hours;
      vals[1] = minutes;
      //vals[2] = dt.getTime();
      return vals;
  }
  
}