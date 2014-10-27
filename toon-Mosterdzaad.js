function getVerse() {
  $.getJSON( "https://raw.githubusercontent.com/OpenBijbel/JSON-OpenBijbel/master/Mosterdzaad.js", function( versedata ) {
      var theVerseData = versedata;
      alert(theVerseData);
       var verseText = versedata.text;
       var verseTranslator = versedata.meta.translator;
      alert(verseTranslator);
      alert(verseText);
  });
};

desiredVerse = 1Cor2.1;

getVerse();
