import { runRobot } from '../robot';
import { VillageState } from '../VillageState';
import { average } from '../utils/utils';

import type { CompareResult, Robot } from '../types/types';

export function compareRobots(
  robot1: Robot,
  memory1: string[],
  robot2: Robot,
  memory2: string[]
): CompareResult {
  const village = new VillageState('Post Office', []);
  const robot1Turns: number[] = [];
  const robot2Turns: number[] = [];
  for (let i = 1; i <= 100; i++) {
    const villageWithMails = village.random(5);
    const robot1Result = runRobot(villageWithMails, robot1, memory1);
    robot1Turns.push(robot1Result.turn);
    const robot2Result = runRobot(villageWithMails, robot2, memory2);
    robot2Turns.push(robot2Result.turn);
  }
  const robot1Average = average(robot1Turns);
  const robot2Average = average(robot2Turns);
  return {
    robot1Average,
    robot1Turns,
    robot2Average,
    robot2Turns,
  };
}
