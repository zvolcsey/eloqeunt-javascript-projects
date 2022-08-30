import crypto from 'crypto';

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

// Avoids modulo bias
export function randomPick(array: string[]) {
  const choice = crypto.randomInt(0, array.length);
  return array[choice];
}
