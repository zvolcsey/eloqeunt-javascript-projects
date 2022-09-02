import { goalOrientedRobot, routeRobot } from '../robot';
import { compareRobots } from './compare';

describe('compareRobots()', () => {
  let result;
  beforeEach(() => {
    result = compareRobots(routeRobot, [], goalOrientedRobot, []);
  });

  it('returns a correct object', () => {
    // Assert
    expect(result).toHaveProperty('robot1Turns');
    expect(result).toHaveProperty('robot1Average');
    expect(result).toHaveProperty('robot2Turns');
    expect(result).toHaveProperty('robot2Average');
  });
  it('has robot1Turns and robot2Turns array 100 elements', () => {
    // Assert
    expect(result.robot1Turns).toHaveLength(100);
    expect(result.robot2Turns).toHaveLength(100);
  });
});
