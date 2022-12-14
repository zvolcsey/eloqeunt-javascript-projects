import { roadGraph } from './roads';
import { VillageState } from './VillageState';
import { randomPick } from './utils/utils';
import { findRoute, mailRoutes } from './routes';

import type { Action, Locations, Robot, RunResult } from './types/types';

export function runRobot(
  state: VillageState,
  robot: Robot,
  memory: string[]
): RunResult {
  let turn = 0;
  const directions: string[] = [];
  while (state.parcels.length > 0) {
    const action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    directions.push(action.direction);
    turn++;
  }
  return { turn, directions };
}

// The dumbest strategy, if the robot walk in a random direction every turn.
export function randomRobot(state: VillageState, memory: string[]): Action {
  return { direction: randomPick(roadGraph[state.place]), memory: memory };
}

// Implementation of an route-following robot
export function routeRobot(state: VillageState, memory: string[]): Action {
  if (memory.length == 0) {
    memory = mailRoutes;
  }
  return { direction: memory[0], memory: memory.slice(1) };
}

export function goalOrientedRobot(
  { place, parcels }: Locations,
  route: string[]
) {
  if (route.length == 0) {
    const parcel = parcels[0];
    if (parcel.place != place) {
      const result = findRoute(roadGraph, place, parcel.place);
      route = result != undefined ? result : [];
    } else {
      const result = findRoute(roadGraph, place, parcel.address);
      route = result != undefined ? result : [];
    }
  }
  return { direction: route[0], memory: route.slice(1) };
}
