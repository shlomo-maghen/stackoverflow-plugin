allClasses = $.ajax("https://docs.oracle.com/javase/7/docs/api/allclasses-noframe.html");

linker = function(text){
	possibleClassNames = text.match(/[A-Z][a-zA-Z]*/g);
	for (i=0; i < possibleClassNames.length; i++) {
	  if(possibleClassNames[i] 
	}
}