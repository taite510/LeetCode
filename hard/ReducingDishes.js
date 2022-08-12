// A chef has collected data on the satisfaction level of his n dishes. Chef can cook any dish in 1 unit of time.

// Like-time coefficient of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. time[i] * satisfaction[i].

// Return the maximum sum of like-time coefficient that the chef can obtain after dishes preparation.

// Dishes can be prepared in any order and the chef can discard some dishes to get this maximum value.

const likeTime = function(arr) {
  let like = 0;
  for (let i = 0; i < arr.length; i++) {
      like += arr[i] * (i + 1);
  }
  return like;
}

const maxSatisfaction = function(sat) {
  sat.sort((a,b) => a - b);
  if (sat[sat.length - 1] < 1) {
      return 0;
  }
  let maxLike = -Infinity;
  while (sat.length > 0) {
      let like = likeTime(sat);
      if (like < maxLike) {
          break;
      }
      maxLike = like;
      sat.shift();
  }
  return maxLike;
};

console.log(maxSatisfaction([-1,-8,0,5,-9]))