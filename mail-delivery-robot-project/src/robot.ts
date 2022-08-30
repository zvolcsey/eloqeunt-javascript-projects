import { roadGraph } from './roads';
import { VillageState } from './VillageState';
import { randomPick } from './utils/utils';

import type { Action, Robot } from './types/types';

export function runRobot(state: VillageState, robot: Robot) {
  for (let turn = 0; ; turn++) {
    if (state.parcels.length == 0) {
      console.log(`Done in ${turn} turns`);
      break;
    }
    let action = robot(state);
    state = state.move(action.direction);
    console.log(`Moved to ${action.direction}`);
  }
}

// The dumbest strategy, if the robot walk in a random direction every turn.
export function randomRobot(state: VillageState): Action {
  return { direction: randomPick(roadGraph[state.place]) };
}
