function findEvenMax(arr) {
	var max=null;
	for(let i=0;i<arr.length;i++){
		if(arr[i]%2==0){
			if(max == null){
				max=arr[i];
			} else if(max<arr[i]) {
				max=arr[i];
			}
		}
	}
	return max;
}

var result = findEvenMax([20,40,99]);
console.log("Largest Even Number = ",result);