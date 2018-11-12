function primeFactors(num) {
	var result=[];
	for(let i=2;i<=num;i++){
		if( num%i==0 && isPrime(i)){
			if(!result.includes(i))	result.push(i);
		}
	}
	return result;
}
function isPrime(num) {
	for(let i=2;i<=Math.sqrt(num);i++){
		if(num%i==0){
			return false;
		}
	}
	return true;
}
console.log("Number : 100");
console.log("Cummilative Array  = ",primeFactors(100));
console.log("Number : 103");
console.log("Cummilative Array  = ",primeFactors(103));
