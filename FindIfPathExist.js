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
