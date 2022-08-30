import { roadGraph } from './roads';
import { Parcel } from './types/types';
import { randomPick } from './utils/utils';

export class VillageState {
  place: string;
  parcels: Parcel[];
  constructor(place: string, parcels: Parcel[]) {
    this.place = place;
    this.parcels = parcels;
  }

  move(destination: string) {
    if (!roadGraph[this.place].includes(destination)) {
      return this;
    } else {
      let parcels = this.parcels
        .map((p) => {
          // Place of the parcle is not change
          if (p.place != this.place) return p;
          // Pick up the parcel
          return { place: destination, address: p.address };
        })
        .filter((p) => p.place != p.address);
      return new VillageState(destination, parcels);
    }
  }

  random(parcelsCount: number) {
    let parcels = [];
    for (let i = 0; i < parcelsCount; i++) {
      let address = randomPick(Object.keys(roadGraph));
      let place;
      do {
        place = randomPick(Object.keys(roadGraph));
      } while (place == address);
      parcels.push({ place, address });
    }
    return new VillageState('Post Office', parcels);
  }
}
