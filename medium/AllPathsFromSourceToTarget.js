// Given a directed acyclic graph (DAG) of n nodes labeled from 0 to n - 1, find all possible paths from node 0 to node n - 1 and return them in any order.

// The graph is given as follows: graph[i] is a list of all nodes you can visit from node i (i.e., there is a directed edge from node i to node graph[i][j]).

const allPathsSourceTarget = function(graph) {
  const target = graph[graph.length - 1];
  let paths = [];
  const findPath = function(next, arr) {
      if (next === target) {
          paths.push(arr);
      } else {
          for (let i = 0; i < next.length; i++) {
              findPath(graph[next[i]], [...arr, next[i]]);
          }
      }
  }
  findPath(graph[0], [0]);
  return paths;
};

console.log(allPathsSourceTarget([[4,3,1],[3,2,4],[3],[4],[]]))