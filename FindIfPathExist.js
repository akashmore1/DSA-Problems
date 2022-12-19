// There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1 (inclusive). The edges in the graph are represented as a 2D integer array edges, where each edges[i] = [ui, vi] denotes a bi-directional edge between vertex ui and vertex vi. Every vertex pair is connected by at most one edge, and no vertex has an edge to itself.

// You want to determine if there is a valid path that exists from vertex source to vertex destination.

// Given edges and the integers n, source, and destination, return true if there is a valid path from source to destination, or false otherwise.
// Leetcode link: https://leetcode.com/problems/find-if-path-exists-in-graph/description/

// Solve with recursion

var validPath = function (n, edges, start, end) {
  if (!n) {
    return false;
  }
  const map = new Map(); // O(2 * E)
  edges.forEach((edge) => {
    // O(E)
    const src_edges = map.has(edge[0]) ? map.get(edge[0]) : [],
      dest_edges = map.has(edge[1]) ? map.get(edge[1]) : [];

    src_edges.push(edge[1]);
    dest_edges.push(edge[0]);
    map.set(edge[0], src_edges);
    map.set(edge[1], dest_edges);
  });
  const visited = new Set(); // O(V)

  function dfs(v) {
    // O(V + E)
    if (v === end) {
      return true;
    }
    if (visited.has(v)) {
      return false;
    }
    visited.add(v);
    for (let e = 0; e < map.get(v).length; ++e) {
      // O(E)
      if (dfs(map.get(v)[e])) {
        return true;
      }
    }
    return false;
  }
  return dfs(start);
};
