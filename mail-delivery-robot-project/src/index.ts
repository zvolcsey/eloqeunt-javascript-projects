import { randomRobot, runRobot } from './robot';
import { VillageState } from './VillageState';

let village = new VillageState('Post Office', []);

runRobot(village.random(5), randomRobot);
