function findWaldo(arr, found) {

      arr.forEach( function (element,index){
        //console.log(element, index);
          if (element === "Waldo") {
         found(index);
            }

      });

}


function actionWhenFound(index) {

  console.log("Found him!" + " at index: " + index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);