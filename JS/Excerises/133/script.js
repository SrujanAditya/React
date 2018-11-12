function checkFactorType(num) {
	var str = num.split("/");
	console.log(str);
	return ((str[0]/str[1])<1) ? "Proper Fraction" : "Improper Fraction";
}
console.log("Number : 15/20");
console.log("Cummilative Array  = ",checkFactorType("15/20"));
console.log("Number : 20/15");
console.log("Cummilative Array  = ",checkFactorType("20/15"));
