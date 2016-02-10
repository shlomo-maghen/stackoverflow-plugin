codeBlocks = $('pre code');

for(i = 0; i < codeBlocks.length; i++){
	text = $(codeBlocks[i]).html();
	
	linker(text);
	break;
}