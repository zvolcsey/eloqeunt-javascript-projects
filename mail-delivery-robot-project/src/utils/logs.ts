import type { CompareResult } from '../types/types';

export function logTitle(title: string) {
  console.info(`\n${title}`);
}

export function logCompareResult(result: CompareResult) {
  logTitle('Results of compare:');
  console.info(`Robot1 is done in average ${result.robot1Average} turns.`);
  console.info(`Robot2 is done in average ${result.robot2Average} turns.`);
}

export function logTurnNumber(turn: number) {
  logTitle('Turns:');
  console.info(`Done in ${turn} turns.`);
}

export function logDirections(directions: string[]) {
  logTitle('Directions:');
  for (const direction of directions) {
    console.info(`Moved to ${direction}.`);
  }
}
