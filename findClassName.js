//binary search to find class Names
findClassName = function(className){
	left = 0;
	right = Object.keys(classes).length-1;
	//return index if found
	while (left <= right){
		mid = Math.floor( (left+right)/2 );
		test = classes[mid].class.toUpperCase();

		if(className.toUpperCase() > test){
			left = mid + 1;
		}else if(className.toUpperCase() < test){
			right = mid-1;
		}else{
			return mid;
		}
	}
	return -1;
}
