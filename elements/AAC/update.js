function(instance, properties, context) {
  
  var div = instance.data.div;
  var id = instance.data.id;
  
  var disabled_dates; 
  if(properties.disabled_dates !== null){
    instance.data.disabled_dates = properties.disabled_dates.get(0,500);
    disabled_dates="";
    console.log(instance.data.disabled_dates);
    for (i=0; i< instance.data.disabled_dates.length;i++){
      disabled_dates = disabled_dates+getFormattedDate1(instance.data.disabled_dates[i])+',';
    }
  }
  
  instance.data.default_date = properties.default_date;
  var default_date = null;
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
	"Wed 22 June 1983" : "D j M Y",
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
  $(did).attr('data-default-date', default_date);
  $(did).attr('data-disabled-days',disabled_dates);
  $(did).attr('data-format',formatLookup[properties.format]);
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
  $(did).attr('data-translate-mode',properties.translate_mode);

  $(did).dateDropper();
  
  
  $('.pick-submit').on('touchstart mousedown', function() {
    
    instance.publishState('value', new Date(document.getElementById(id).value));
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