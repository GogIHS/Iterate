'use strict'

const search = function(arr, key) {
  let low = 0,
      high = arr.length - 1,
      mid = Math.floor((high + low) / 2);
  while (low < high) {
    if (arr[mid] === key)
      return true;
    else if (key > arr[mid]) {
      low = mid + 1;
      mid = Math.floor((high+low)/2);
    }
    else {
      high = mid;
      mid = Math.floor((high+low)/2);
    }
  };
  return false;
};







console.log(search([1, 2, 8, 9, 12], 9));
//console.log(srchElem(srchEl))
