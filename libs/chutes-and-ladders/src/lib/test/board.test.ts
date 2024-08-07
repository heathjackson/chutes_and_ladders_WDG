import { ISpace } from '../game_logic/interfaces';
import { Board } from '../game_logic/board';

describe('check that the newBoard is created correctly with the correct amount of spaces and a start and finish', () => {
  const newBoard = new Board([], 8);
  const space0: ISpace = newBoard.createAllSpaces();
  const space1 = space0.next;
  const space2 = space1?.next;
  const space3 = space2?.next;
  const space4 = space3?.next;
  const space5 = space4?.next;
  const space6 = space5?.next;
  const space7 = space6?.next;

  test('check newBoard is set up correctly', () => {
    expect(space0.type).toEqual(0);
    expect(space0.back).toBeFalsy;
    // expect(space.back).toBeFalsy();
    expect(space1).toBeTruthy();
    expect(space2).toBeTruthy();
    expect(space3).toBeTruthy();
    expect(space4).toBeTruthy();
    expect(space5).toBeTruthy();
    expect(space6).toBeTruthy();
    expect(space7?.type).toEqual(4);
    expect(space7?.back).toBeTruthy;
  });
});
