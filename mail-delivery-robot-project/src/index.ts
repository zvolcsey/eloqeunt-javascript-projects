import { VillageState } from './VillageState';

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
