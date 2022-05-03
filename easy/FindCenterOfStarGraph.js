// There is an undirected star graph consisting of n nodes labeled from 1 to n.

// A star graph is a graph where there is one center node and exactly n - 1 edges that connect the center node with every other node.

// You are given a 2D integer array edges where each edges[i] = [ui, vi] indicates that there is an edge between the nodes ui and vi.

// Return the center of the given star graph.

const findCenter = function(edges) {
  const obj = {}
  for (let i = 0; i < edges.length; i++) {
      if (obj[edges[i][0]]) {
          return edges[i][0];
      }
      if (obj[edges[i][1]]) {
          return edges[i][1];
      }
      obj[edges[i][0]] = true;
      obj[edges[i][1]] = true;
  }
};

console.log(findCenter([[1,2],[2,3],[4,2]]))