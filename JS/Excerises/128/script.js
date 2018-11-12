function findRoundoffGreaterThanNum(num) {
	while(num%10!=0){
		num++;
	}
	return num;
}
console.log("Number : 56");
console.log("RoundOff = ",findRoundoffGreaterThanNum(56));
console.log("Number : 592");
console.log("RoundOff = ",findRoundoffGreaterThanNum(592));