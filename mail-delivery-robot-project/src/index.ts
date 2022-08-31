import { goalOrientedRobot, randomRobot, routeRobot, runRobot } from './robot';
import { mailRoutes } from './routes';
import { VillageState } from './VillageState';

const village = new VillageState('Post Office', []);
const villageWithMails = village.random(5);

console.log('\nRandom robot:');
runRobot(villageWithMails, randomRobot, []);
console.log('\nRoute robot:');
console.log(villageWithMails.parcels);
runRobot(villageWithMails, routeRobot, mailRoutes);
console.log('\nGoal-Oriented Robot robot:');
console.log(villageWithMails.parcels);
runRobot(villageWithMails, goalOrientedRobot, []);
