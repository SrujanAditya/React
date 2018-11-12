function convertString(str) {
	var result = [];
	for(let i=0; i < str.length; i++) {
		result.push( String.fromCharCode(25 - (str.charCodeAt(i) - 'a'.charCodeAt(0)) + 'a'.charCodeAt(0)));
	}
	return result;
}
console.log("String : abcxyz");
console.log("Changed String = ",convertString("abcxyz"));
console.log("String : python");
console.log("Changed String = ",convertString("python"));
