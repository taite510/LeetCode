// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.

const relativeSortArray = function(arr1, arr2) {
  let start1 = 0;
  let start2 = 0;
  while (start2 < arr2.length) {
      for (let i = start1; i < arr1.length; i++) {
          if (arr1[i] === arr2[start2]) {
              arr1[i] = arr1[start1];
              arr1[start1] = arr2[start2];
              start1++;
          }
      }
      start2++;
  }
  let remainder = arr1.splice(start1, arr1.length - start1).sort((a, b) => a - b);
  return [...arr1, ...remainder];
};

console.log(relativeSortArray([2,3,1,3,2,4,6,7,9,2,19],[2,1,4,3,9,6]))