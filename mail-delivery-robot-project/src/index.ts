import { compareRobots } from './measure/compare';
import { logCompareResult } from './utils/logs';
import { goalOrientedRobot, routeRobot } from './robot';

// Each robot will solve 100 tasks.
const result = compareRobots(routeRobot, [], goalOrientedRobot, []);
logCompareResult(result);
