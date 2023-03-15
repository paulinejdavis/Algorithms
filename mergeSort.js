function mergeSort(values) {
    if (values.length <= 1) {
      return values;
    }
  
    const middleIndex = Math.floor(values.length / 2);
    const leftValues = mergeSort(values.slice(0, middleIndex));
    const rightValues = mergeSort(values.slice(middleIndex));
    const sortedValues = [];
  
    let leftIndex = 0;
    let rightIndex = 0;
  
    while (leftIndex < leftValues.length && rightIndex < rightValues.length) {
      if (leftValues[leftIndex] < rightValues[rightIndex]) {
        sortedValues.push(leftValues[leftIndex]);
        leftIndex++;
      } else {
        sortedValues.push(rightValues[rightIndex]);
        rightIndex++;
      }
    }
  
    return sortedValues.concat(leftValues.slice(leftIndex)).concat(rightValues.slice(rightIndex));
  }
  
  console.log(mergeSort([1, 5, 3, 4, 2, 6, 7, 8, 9, 10]));