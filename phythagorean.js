var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function (key){
  //console.log(key)
  //console.log(Math.sqrt((key.x*(key.x)+(key.y*key.y))));
  return Math.sqrt((key.x*(key.x)+(key.y*key.y)))

});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);