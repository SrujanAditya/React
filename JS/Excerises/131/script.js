function CummilativeSum(arr) {
	var sum=0;
	var resultArr=arr;
	for(let i=0;i<arr.length;i++){
		sum+=arr[i];
		resultArr[i]=sum;
	}
	return resultArr;
}
console.log("Array : [1,2,3,4,5]");
console.log("Cummilative Array  = ",CummilativeSum([1,2,3,4,5]));
console.log("Array : [1,2,3,-4,5]");
console.log("Cummilative Array  = ",CummilativeSum([1,2,3,-4,5]));