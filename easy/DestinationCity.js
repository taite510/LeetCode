// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.

// Return the destination city, that is, the city without any path outgoing to another city.

// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

const destCity = function(paths) {
  let result
  let currentDest = paths[0][1];
  //paths.splice(0, 1);
  const findDestCity = (paths, nextCity) => {
    let foundCity = false;
    for (let i = 0; i < paths.length; i++) {
      if (paths[i][0] === nextCity) {
        foundCity = true;
        nextCity = paths[i][1];
        //paths.splice(i, 1);
        findDestCity(paths, nextCity);
        break;
      }
    }
    if (foundCity === false) {
      result = nextCity;
    }
  }
  findDestCity(paths, currentDest);
  return result;
};

const testPaths = [["B","C"],["A", "E"],["D","B"],["C","A"]];

console.log(destCity(testPaths))