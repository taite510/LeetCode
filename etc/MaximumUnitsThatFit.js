// finds the maximum units that are able to fit in a truck with a size of truckSize

var maximumUnits = function(boxTypes, truckSize) {
  let [currentSpace, totalUnits] = [truckSize, 0];
  boxTypes.sort((a,b) => b[1] - a[1]);
  for (let i = 0; i < boxTypes.length && currentSpace > 0; i++) {
    let [numBoxes, units] = [boxTypes[i][0], boxTypes[i][1]];
    if (numBoxes >= currentSpace) {
      totalUnits += units * numBoxes;
      currentSpace -= numBoxes;
    } else {
      totalUnits += units * currentSpace;
      currentSpace = 0;
    }
  }
  return totalUnits;
};
debugger
console.log(maximumUnits([[5,10],[2,5],[4,7],[3,9]], 10))