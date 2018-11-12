function FindNoOfEvenDigits(num) {
	var digit=num.toString().split("");
	var count=0;
	for(let i=0;i<digit.length;i++){
		if(digit[i]%2==0)
			count++;
	}
	return count;
}
console.log("Number : 5475120");
console.log("Next Prime = ",FindNoOfEvenDigits(5475120));
console.log("Number : 184217");
console.log("Next Prime = ",FindNoOfEvenDigits(184217));