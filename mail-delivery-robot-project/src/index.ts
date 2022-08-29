import { VillageState } from './VillageState';

const roads: string[] = [
  "Alice's House-Bob's House",
  "Alice's House-Cabin",
  "Alice's House-Post Office",
  "Bob's House-Town Hall",
  "Daria's House-Ernie's House",
  "Daria's House-Town Hall",
  "Ernie's House-Grete's House",
  "Grete's House-Farm",
  "Grete's House-Shop",
  'Marketplace-Farm',
  'Marketplace-Post Office',
  'Marketplace-Shop',
  'Marketplace-Town Hall',
  'Shop-Town Hall',
];

function buildGraph(edges: string[]) {
  let graph = Object.create(null);

  function addEdge(from: string, to: string) {
    if (graph[from] == null) {
      graph[from] = [to];
    } else {
      graph[from].push(to);
    }
  }

  for (let [from, to] of edges.map((r) => r.split('-'))) {
    addEdge(from, to);
    addEdge(to, from);
  }

  return graph;
}

export const roadGraph = buildGraph(roads);

let first = new VillageState('Post Office', [
  { place: 'Post Office', address: "Alice's House" },
]);

let next = first.move("Alice's House");

console.log(first.place);
// -> Post Office

console.log(first.parcels);
// -> [{ place: 'Post Office', address: "Alice's House" }]

console.log(next.place);
// -> Alice's House

console.log(next.parcels);
// -> []
