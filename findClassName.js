findClassName = function(className){
	left = 0;
	right = Object.keys(classes).length;
	mid = right/2;
	counter = 0
	while (right > mid){
		test = classes[mid].class

		if(className == test){
			return mid;
		}else if(className > test){
			left = mid;
			mid = Math.ceil((left + right)/2);
		}else{
			right = mid;
			mid = Math.ceil( (left + right)/2);
		}
	}
	return -1;
}
