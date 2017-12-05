function(instance, context) {
  var id = "timer"+(Math.random() * Math.pow(2, 54)).toString(18);
  var div;
  div = $('<div><input type="text" id="'+id+'" class="air-tp"/></div>');
  div.css("width", "100%");
  div.css("height", "100%");
  div.css("cursor", "pointer");
  //div.css("border", "1px solid rgb(189, 189, 189)");
  //div.css("border-radius", "3px");
  div.css("transition", "border-color 200ms ease, box-shadow 200ms ease");
  //div.css("col","rgb(85, 85, 85)");
  div.css("padding","1px 4px");
  instance.canvas.append(div);
  instance.data.div = div;
  instance.data.id = id;
  //instance.publishState('value', document.getElementById(id).value);
}