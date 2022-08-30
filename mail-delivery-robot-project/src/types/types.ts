import { VillageState } from '../VillageState';

export type Robot = (state: VillageState, memory: string[]) => Action;

export interface Parcel {
  place: string;
  address: string;
}

export interface Action {
  direction: string;
  memory: string[];
}
