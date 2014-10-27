function getVerse(desiredVerse) {
  $.getJSON( "https://raw.githubusercontent.com/OpenBijbel/JSON-OpenBijbel/master/Mosterdzaad.json", function( versedata ) {
      var theVerseData = versedata;
      alert(theVerseData);
       var verseText = versedata.text;
       var verseVertaler = versedata.meta.translator;
      alert(verseTranslator);
      alert(verseTranslator);
  });
};

desiredVerse = 1Cor2.1

getVerse();
