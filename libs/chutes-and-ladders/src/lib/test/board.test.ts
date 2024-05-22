import { SpaceType } from '../game_logic/interfaces';
import { Board } from '../game_logic/board';

describe('check that the newBoard is created correctly with the correct amount of spaces and a start and finish', () => {
  const newBoard = new Board([], 100);
  test('check newBoard is set up correctly', () => {
    expect(newBoard.start).toBeTruthy();
    expect(newBoard.start.next).toBeTruthy();
    expect(newBoard.start.back).toBeFalsy();
    expect(newBoard.start.type).toEqual(SpaceType.START);
    expect(newBoard.finish.type).toEqual(SpaceType.FINISH);
    expect(newBoard.finish.next).toBeFalsy();
    expect(newBoard.finish.back).toBeTruthy();
  });
});
