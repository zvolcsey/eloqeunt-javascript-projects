import { randomRobot, routeRobot, runRobot } from './robot';
import { mailRoutes } from './routes';
import { VillageState } from './VillageState';

let village = new VillageState('Post Office', []);
let villageWithMails = village.random(5);

runRobot(villageWithMails, randomRobot, []);
runRobot(villageWithMails, routeRobot, mailRoutes);
