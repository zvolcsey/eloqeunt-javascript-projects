import { randomRobot, routeRobot, runRobot } from './robot';
import { mailRoutes } from './routes';
import { VillageState } from './VillageState';

const village = new VillageState('Post Office', []);
const villageWithMails = village.random(5);

runRobot(villageWithMails, randomRobot, []);
runRobot(villageWithMails, routeRobot, mailRoutes);
