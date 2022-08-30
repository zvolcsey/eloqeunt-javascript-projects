import { roadGraph } from './roads';
import { VillageState } from './VillageState';
import { randomPick } from './utils/utils';
import { mailRoutes } from './routes';

import type { Action, Robot } from './types/types';

export function runRobot(state: VillageState, robot: Robot, memory: string[]) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Moved to ${action.direction}`);
  }
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
