function permutation(str, array) {
  subPermutation(str, "", array);
  return array;
}

function subPermutation(str, prefix, array) {
  if (str == "") {
    if (!array.includes(prefix)) {
      array.push(prefix);
    }
  } else {
    for (let i = 0; i < str.length; i++) {
      let rem = str.substring(0, i) + str.substring(i + 1);
      subPermutation(rem, prefix + str.charAt(i), array);
    }
  }
}
let arr = [];
permutation("hello", arr);
console.log(arr);
