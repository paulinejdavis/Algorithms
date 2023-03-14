function recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
    if (start > end) {
      // target not found
      return false;
    }
  
    const mid = Math.floor((start + end) / 2);
  
    if (arr[mid] === target) {
      // target found at the middle index
      return true;
    } else if (arr[mid] < target) {
      // search in the right half of the array
      return recursiveBinarySearch(arr, target, mid + 1, end);
    } else {
      // search in the left half of the array
      return recursiveBinarySearch(arr, target, start, mid - 1);
    }
  }
  
  console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5)); // true
  console.log(recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11)); // false
  





// function recursiveBinarySearch(arr, target, start = 0, end = arr.length - 1) {
//   if (start > end) {
//     // target not found
//     return false;
//   }

//   const mid = Math.floor((start + end) / 2);

//   if (arr[mid] === target) {
//     // target found at the middle index
//     return true;
//   } else if (arr[mid] < target) {
//     // search in the right half of the array
//     return recursiveBinarySearch(arr, target, mid + 1, end);
//   } else {
//     // search in the left half of the array
//     return recursiveBinarySearch(arr, target, start, mid - 1);
// }
// }


// function verify(result) {
//   if (result) {
//     console.log("Target found in list");
//   } else {
//     console.log("Target not found in list");
//   }
// }

// const result = recursiveBinarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5);
// verify(result);

//     if (start > end) {
//       // target not found
//       return -1;
//     }
  
//     const mid = Math.floor((start + end) / 2);
  
//     if (arr[mid] === target) {
//       // target found at the middle index
//       return mid;
//     } else if (arr[mid] < target) {
//       // search in the right half of the array
//       return recursiveBinarySearch(arr, target, mid + 1, end);
//     } else {
//       // search in the left half of the array
//       return recursiveBinarySearch(arr, target, start, mid - 1);
//     }
// }

// function verify(index) {
//     if (index !== null) {
//     console.log("Target found at index:", index);
//     } else {
//     console.log("Target not found in list");
//     }
// }
  
// const index = recursiveBinarySearch([1,2,3,4,5,6,7,8,9,10], 5);
// verify(index);
  