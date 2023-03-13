function linearSearch(array, key){
    //start at beginning
    for(let i = 0; i < array.length; i++){
    //move sequentially
      if(array[i] === key) {
          return i;
      }
      //compare current value to target
      // reach end of list
    }
    return -1;
  }
  