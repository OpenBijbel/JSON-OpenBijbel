function getVerse() {
  $.getJSON( "https://raw.githubusercontent.com/OpenBijbel/JSON-OpenBijbel/master/Mosterdzaad.js", function( versedata ) {
      alert(verseData);
  });
};

getVerse();
