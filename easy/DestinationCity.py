# You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.

# Return the destination city, that is, the city without any path outgoing to another city.

# It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

def destCity(routes) :
  currentDest = routes[0][1]
  del routes[0]
  def findCity(city) :
    for route in routes :
      if route[0] == city :
        city = route[1]
        del route
        return findCity(city)
    return city
  currentDest = findCity(currentDest)
  return currentDest


testPaths = [["B","C"],["A", "E"],["D","B"],["C","A"]]

print(destCity(testPaths))