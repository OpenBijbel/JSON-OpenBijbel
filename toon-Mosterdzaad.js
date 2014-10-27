function getVerse() {
  $.getJSON( "https://raw.githubusercontent.com/OpenBijbel/JSON-OpenBijbel/master/Mosterdzaad2.js", function( versedata ) {
      alert(verseData);
  });
};

getVerse();
