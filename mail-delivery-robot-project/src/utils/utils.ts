// TODO: Graph's type
export function buildGraph(edges: string[]) {
  const graph = Object.create(null);

  function addEdge(from: string, to: string) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (const [from, to] of edges.map((r) => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

// The other solution could be crypto.randomInt(0, array.length).
// It is more secure, but slower. https://stackoverflow.com/a/69273612
export function randomPick(array: string[]) {
  const choice = Math.floor(Math.random() * array.length);
  return array[choice];
}
