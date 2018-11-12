function sortlength(a, b) { return a.length-b.length;}
function sort_by_string_length(arra) {
	return arra.sort(sortlength);;
}
var arra = ["xyz","acd","aa","bb","zzz","", "a","b"];
console.log("Original array: "+ arra+"\n");
console.log(sort_by_string_length(["xyz","acd","aa","bb","zzz","", "a","b"]));