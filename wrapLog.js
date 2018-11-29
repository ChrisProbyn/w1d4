var wrapLog = function (callback, name) {



  return function () {
    var array = [];
    array = Array.from(arguments)
    var result = callback.apply(null, array);
    var string = ""
    string = string + name + "(";
    for (var i =0; i < arguments.length; i++){
      string += arguments[i];
      if(i < arguments.length -1){
        string += ", ";
      }
    }

    string += ") => " + result;
      return string;
  }



};

var area = function (x, y) {
  return x * y;
};
var logArea = wrapLog(area, "area");

console.log(logArea(5, 3)); // area(5, 3) => 15
console.log(logArea(3, 2)); // area(3, 2) => 6

var volume = function (x, y, z) {
  return x * y * z;
};
var logVolume = wrapLog(volume, "volume");

console.log(logVolume(5, 3, 2)); // volume(5, 3, 2) => 30

var multiples = function () {
  var array = Array.from(arguments);
  return array.reduce(function (a,b){
      return a *b;
  },1);


};

var logP = wrapLog(multiples, "P");

console.log(logP(1,2,3,4,5,56.7,7,78)); // volume(5, 3, 2) => 30
