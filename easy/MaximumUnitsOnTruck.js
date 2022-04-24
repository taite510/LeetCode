// You are assigned to put some amount of boxes onto one truck. You are given a 2D array boxTypes, where boxTypes[i] = [numberOfBoxesi, numberOfUnitsPerBoxi]:

// numberOfBoxesi is the number of boxes of type i.
// numberOfUnitsPerBoxi is the number of units in each box of the type i.
// You are also given an integer truckSize, which is the maximum number of boxes that can be put on the truck. You can choose any boxes to put on the truck as long as the number of boxes does not exceed truckSize.

// Return the maximum total number of units that can be put on the truck.

var maximumUnits = function(boxTypes, truckSize) {
  let [currentSpace, totalUnits] = [truckSize, 0];
  boxTypes.sort((a,b) => b[1] - a[1]);
  for (let i = 0; i < boxTypes.length && currentSpace > 0; i++) {
    let [numBoxes, units] = [boxTypes[i][0], boxTypes[i][1]];
    if (numBoxes <= currentSpace) {
      totalUnits += units * numBoxes;
      currentSpace -= numBoxes;
    } else {
      totalUnits += units * currentSpace;
      currentSpace = 0;
    }
  }
  return totalUnits;
};
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))