import { VillageState } from '../VillageState';

export type Robot = (state: VillageState, memory: string[]) => Action;
export interface RoadGraph {
  [index: string]: string[];
}
export interface Parcel {
  place: string;
  address: string;
}

export interface Action {
  direction: string;
  memory: string[];
}

export interface Locations {
  place: string;
  parcels: Parcel[];
}

export interface Route {
  at: string;
  route: string[];
}

export interface CompareResult {
  robot1Average: number;
  robot1Turns: number[];
  robot2Average: number;
  robot2Turns: number[];
}

export interface RunResult {
  turn: number;
  directions: string[];
}
