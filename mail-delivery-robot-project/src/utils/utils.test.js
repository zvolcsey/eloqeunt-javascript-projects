import { average } from './utils';

describe('average()', () => {
  it('returns the correct average', () => {
    //Arrange
    const array = [1, 2, 3];
    // Act
    const result = average(array);
    // Assert
    expect(result).toBe(2);
    expect(typeof result).toBe('number');
  });
});
