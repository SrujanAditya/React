function replace_first_digit( str) {
	var strArr = str.split("");
	for(let i=0; i < strArr.length; i++) {
		if( !isNaN( Number( strArr[i]))) {
			return str.replace(strArr[i],"$");
		}
	}
	//return input_str.replace(/[0-9]/g, '$');
	return "Digit Not Present";
}
console.log(replace_first_digit("abc1dab3c"));
console.log(replace_first_digit("p3ython"));
console.log(replace_first_digit("abcabc"));  