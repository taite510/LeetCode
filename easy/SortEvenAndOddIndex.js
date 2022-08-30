// You are given a 0-indexed integer array nums. Rearrange the values of nums according to the following rules:

// Sort the values at odd indices of nums in non-increasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [4,3,2,1] after. The values at odd indices 1 and 3 are sorted in non-increasing order.
// Sort the values at even indices of nums in non-decreasing order.
// For example, if nums = [4,1,2,3] before this step, it becomes [2,1,4,3] after. The values at even indices 0 and 2 are sorted in non-decreasing order.
// Return the array formed after rearranging the values of nums.

var sortEvenOdd = function(nums) {
  for (var i = 0; i < nums.length; i++){
      for (var j = 0; j < nums.length - i - 2; j++){
        if (j % 2 === 0 && nums[j] < nums[j + 2]){
            var temp = nums[j];
            nums[j] = nums[j + 2];
            nums[j + 2] = temp;
        } else if (j % 2 !== 0 && nums[j] > nums[j + 2]) {
              var temp = nums[j + 2];
            nums[j + 2] = nums[j];
            nums[j] = temp;
          }
      }
  }
  return nums;
};

console.log(sortEvenOdd([5,39,33,5,12,27,20,45,14,25,32,33,30,30,9,14,44,15,21]))