var countdownGenerator = function (x) {
  var index = x
  return function (){
    if(index >0){
      console.log('T-minus '+ index +'...');
    }
    else if(index === 0){
      console.log("Blast Off!");
    }
    else {
      console.log('Rockets already gone, bub!');
    }
    index -= 1;
    return index;

  }

};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!