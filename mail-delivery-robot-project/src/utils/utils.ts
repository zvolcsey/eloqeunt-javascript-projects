import crypto from 'crypto';

import type { RoadGraph } from '../types/types';

export function buildGraph(edges: string[]) {
  const graph: RoadGraph = Object.create(null);

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

export function average(array: number[]) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (prevValue, currentValue) => prevValue + currentValue,
    initialValue
  );
  return Math.ceil(sumWithInitial / array.length);
}
