// There is a biker going on a road trip. The road trip consists of n + 1 points at different altitudes. The biker starts his trip on point 0 with altitude equal 0.

// You are given an integer array gain of length n where gain[i] is the net gain in altitude between points i​​​​​​ and i + 1 for all (0 <= i < n). Return the highest altitude of a point.

var largestAltitude = function(gain) {
  let currentAlt = 0;
  let highestAlt = 0;
  for (let i = 0; i < gain.length; i++) {
    currentAlt += gain[i]
    if (highestAlt < currentAlt) {
      highestAlt = currentAlt;
    }
  }
  return highestAlt;
};

console.log(largestAltitude([-5,1,5,-4,0,-2]))