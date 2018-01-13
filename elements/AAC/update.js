function(instance, properties, context) {
  var div = instance.data.div;
  var id = instance.data.id;
  var format = properties.format;
  
  var disabled_dates = ""; 
  if(properties.disabled_dates !== null){
    instance.data.disabled_dates = properties.disabled_dates.get(0,500);
    for (i=0; i< instance.data.disabled_dates.length;i++){
      disabled_dates = disabled_dates+getFormattedDate1(instance.data.disabled_dates[i])+',';
    }
  }
  console.log(disabled_dates);
  
  instance.data.default_date = properties.default_date;
  var default_date = "";
  if(instance.data.default_date !== null){
    default_date = getFormattedDate2(instance.data.default_date);
    console.log(default_date);
  }
  
  
  var formatLookup = {
    "22/06/1983" : "d/m/Y",
	"06/22/1983" : "m/d/Y",
	"22-06-1983" : "d-m-Y",
	"06-22-1983" : "m-d-Y",
	"22 June 1983" : "j F Y",
	"22 Jun 1983" : "j M Y",
	"22 Jun 1983" : "S F Y",
	"Wednesday 22 June 1983" : "l j M Y",
    //"Wed 22 June 1983" : "D j M Y",
	"Jun (month only)" : "m",
	"1983 (year only)" : "Y",
  };
  
  var langLookup = {
    "English" : "en",
    "Arabic" : "ar",
	"Italian" : "it",
	"Hungarian" : "hu",
	"Greek" : "gr",
	"Espanol" : "es",
	"Dansk" : "da",
	"Deutsch" : "de",
	"Dutch" : "nl",
	"Francais" : "fr",
	"Polski" : "pl",
	"Portuguese" : "pt",
	"Slovenian" : "si",
	"Ukrainian" : "uk",
	"Russian" : "ru",
	"Turkish" : "tr",
	"Korean" : "ko"
  };  
  var did = '#'+id;
  
  
  $(did).attr('data-modal',properties.modal);
 // $(did).attr('data-d',default_date.getDay());
  //$(did).attr('data-m',default_date.getMonth());
  //$(did).attr('data-y',default_date.getFullYear());
  if(default_date !== null){
    $(did).attr('data-default-date', default_date);
  };
  disabled_dates = "12/01/2017,12/02/2017,12/02/2017";
  $(did).attr('data-disabled-days',(disabled_dates === "")? false : disabled_dates);
  $(did).attr('data-format',formatLookup[format]);
  $(did).attr('data-fx',properties.fx);
  $(did).attr('data-fx-mobile',properties.fx_mobile);
  $(did).attr('data-init-set',properties.init_set);
  $(did).attr('data-lang',langLookup[properties.lang]);
  $(did).attr('data-large-mode',properties.large_mode);
  $(did).attr('data-large-default',properties.large_default);
  $(did).attr('data-lock',properties.lock);
  $(did).attr('data-max-year',properties.max_year);
  $(did).attr('data-min-year',properties.min_year);
  $(did).attr('data-modal',properties.modal);
  $(did).attr('data-theme','air-drop-'+properties.theme);
  //$(did).attr('data-translate-mode',properties.translate_mode);
  $(did).attr('placeholder',properties.placeholder);

  $(did).dateDropper();
   console.log( $(did).dateDropper().picker);
  
  instance.publishState('value', getDateFromFormat(properties.format, document.getElementById(id).value));
  
  $(did).on("change", function() {
   instance.publishState('value', getDateFromFormat(properties.format, document.getElementById(id).value));
  });
  
  $('.pick-submit').on('touchstart mousedown', function() { 
    console.log(document.getElementById(id).value);
    instance.publishState('value', getDateFromFormat(properties.format, document.getElementById(id).value));
  });
  
  //mm/dd/yyyy
  function getFormattedDate1(date) {
    console.log(date);
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '/' + day + '/' + year;
  }
  
  //mm-dd-yyyy
  function getFormattedDate2(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return month + '-' + day + '-' + year;
  }
  
  function getDateFromFormat(form, value){
      var dateStr,day,month, year;
      if(form === "22/06/1983") {
          dateStr = value.split("/");
          return new Date(dateStr[2],dateStr[1],dateStr[0],0,0,0,0);
      }
      else if(form === "06/22/1983") {
          dateStr = value.split("/");
          return new Date(dateStr[2],dateStr[0],dateStr[1],0,0,0,0);
      }
      else if(form === "22-06-1983") {
          dateStr = value.split("-");
          return new Date(dateStr[2],dateStr[1],dateStr[0],0,0,0,0);
      }
      else if(form === "06-22-1983") {
          dateStr = value.split("-");
          return new Date(dateStr[2],dateStr[0],dateStr[1],0,0,0,0);
      }
      else if(form === "22 June 1983") {
          return new Date(value);
      }
      else if(form === "22 Jun 1983") {
          return new Date(value);
      }
      else if(form === "Wednesday 22 June 1983") {
          return new Date(value);
      }
      /*else if(form === "Wed 22 June 1983") {
          return new Date(value);
      }*/
      else if(form === "Jun (month only)") {
          var date = new Date();
          date.setMonth(value-1)
          return date;
      }
      else if(form === "1983 (year only)") {
          var date = new Date();
          date.setYear(value);
          return date;
      }
      else{
          return null;
      }
  }  
/*
M	Short month	Jan
F	Long month	January
m	Numeric month	01-12
n	Non-padded numeric month	1-12
Y	Long numeric year	2015
d	Padded numeric day	01-31
j	Non-Padded Numeric day	1-31
D	Short day-of-week	Sun
l	Long day-of-week	Sunday
S	Suffixed numeric day	13th
*/

}