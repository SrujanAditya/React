function find_rightmost_round_number(arr) {

  var result = null;
  for (var i = arr.length-1; i >=0; i--)
  {
    if (arr[i] % 10 === 0) {
      result = i;
    }
  }

  return result;
}

console.log(find_rightmost_round_number([1, 22, 30, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 56]));
console.log(find_rightmost_round_number([1, 22, 32, 54, 50]));
