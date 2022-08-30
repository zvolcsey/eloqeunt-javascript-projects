import { VillageState } from '../VillageState';

export interface Parcel {
  place: string;
  address: string;
}

export interface Action {
  direction: string;
}

export type Robot = (state: VillageState) => Action;
