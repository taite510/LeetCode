// finds the route pairs with the most efficient route

function routePairs(maxTravelDist, forwardRouteList, returnRouteList) {
  const pairs = [];
  let distance = 0;
  for (let i = 0; i < forwardRouteList.length; i++) {
      for (let j = 0; j < returnRouteList.length; j++) {
          let totalDistance = forwardRouteList[i][1] + returnRouteList[j][1];
          let pair = [forwardRouteList[i][0], returnRouteList[j][0]];
          if (totalDistance <= maxTravelDist) {
              if (totalDistance > distance) {
                  distance = totalDistance;
                  pairs = [];
              }
              pairs.push(pair);
          }
      }
  }
  return pairs
}

console.log(routePairs(10000,[[1,3000],[2,5000],[3,7000],[4,10000]],[[1,2000],[2,3000],[3,4000],[4,5000]]))