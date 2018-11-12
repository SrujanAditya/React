function findReverseBinaryEqualent(input) {
	return parseInt(input.toString(2).split("").reverse().join(""),2);
}
console.log("Number : 56");
console.log("Reverse = ",findReverseBinaryEqualent(56));
console.log("Number : 234");
console.log("Reverse = ",findReverseBinaryEqualent(234));