# You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi. Return the destination city, that is, the city without any path outgoing to another city.

# It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

def dest_city(paths)
  hash = {}
  for trip in paths
      hash[trip[0]] = true
  end
  for trip in paths
      unless hash.key?(trip[1])
          return trip[1]
      end
  end
end

puts dest_city([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]) == "Sao Paulo"