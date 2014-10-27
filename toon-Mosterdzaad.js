function getVerse() {
  var json_obj;
  $.getJSON( "https://raw.githubusercontent.com/OpenBijbel/JSON-OpenBijbel/master/Mosterdzaad2.js", function( versedata ) {
    json_obj = versedata;
    alert(json_obj.text);
  });
};

getVerse();
