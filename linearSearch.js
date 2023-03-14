function linearSearch(array, key){
    //start at beginning of list
    for(let i = 0; i < array.length; i++){
    //move sequentially
      if(array[i] === key) {
          return i;
      }
      //compare current value to target
      // reach end of list
    }
    return null;
  }

  function verify(index) {
    if (index !== null) {
    console.log("Target found at index:", index);
    } else {
    console.log("Target not found in list");
    }
}
  
const index = linearSearch([1,2,3,4,5,6,7,8,9,10], 112);
verify(index);

//   console.log(linearSearch([1,2,3,4,5,6,7,8,9,10], 5));

  //big(O)n value of n