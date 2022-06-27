// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].

// Return the array in the form [x1,y1,x2,y2,...,xn,yn].

const shuffle = function(nums, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
      res.push(nums[i], nums[n + i]);
  }
  return res;
};

console.log(shuffle([1,2,3,4,4,3,2,1], 4))