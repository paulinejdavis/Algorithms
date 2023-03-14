function binarySearch(array, key) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (array[mid] === key) {
            return mid;
        }
        if (array[mid] < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
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
  
const index = binarySearch([1,2,3,4,5,6,7,8,9,10], 12);
verify(index);


