var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {
  return word.length;
}));

console.log(map(words, function(word) {
  return word.toUpperCase();
}));

console.log(map(words, function(word) {
  return word.split('').reverse().join('');
}));

function map(array, callback) {
  var newArray = [];
  for (var a of array){
    newArray.push(callback(a));

  }
  return newArray;
};

/*[6, 7, 2, 5, 3]

[ "GROUND", "CONTROL", "TO", "MAJOR", "TOM" ]

[ 'dnuorg', 'lortnoc', 'ot', 'rojam', 'mot' ] */