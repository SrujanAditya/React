function FindNextPrimeNum(num) {
	num++;
	while(true){
		var isPrime = true;
		for(let i=2;i<=Math.sqrt(num);i++){
			if(num%i==0){
				isPrime = false;
				break;
			}
		}
		if(isPrime)
			break;
		num++
	}
	return num;
}
console.log("Number : 5");
console.log("Next Prime = ",FindNextPrimeNum(5));
console.log("Number : 17");
console.log("Next Prime = ",FindNextPrimeNum(17));