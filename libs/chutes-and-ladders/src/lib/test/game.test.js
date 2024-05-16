import { Chutes_and_ladders } from '../game_logic/cl_game';
import { Color } from '../game_logic/avatar';

describe('#createSpecialSpaces', () => {
  const game = new Chutes_and_ladders(5, 5);
  test('#createSpecialSpaces', () => {
    expect(game.specialSpaces.length).toBe(20);
  });

  test('#verifySpan - make sure the span from start to end of a special space is less than 40', () => {
    expect(game.isWithinSpan(20, 45)).toBeTruthy;
    expect(game.isWithinSpan(20, 60)).toBeFalsy;
  });

  test('#verifyUniqueValue - test for unique values in an array if another number is added', () => {
    const arr = [2, 5, 6, 10, 9];
    expect(game.isUniqueValue(arr, 11)).toBeTruthy;
    expect(game.isUniqueValue(arr, 10)).toBeFalsy;
  });
});

describe('#registerPlayer', () => {
  test('#chooseColor - verify color chosen is no longer available in array', () => {
    const game = new Chutes_and_ladders(5, 5);
    game.chooseColor(Color.GREEN);
    expect(game.availableAvatars.length).toBe(3);
    expect(game.availableAvatars).toEqual([
      Color.BLUE,
      Color.PURPLE,
      Color.RED,
    ]);
  });

  describe('test the registerPlayer function as a whole', () => {
    let game;

    beforeEach(() => {
      game = new Chutes_and_ladders(5, 5);
      game.registerPlayer('Heather', Color.BLUE);
      game.registerPlayer('Matt', Color.GREEN);
    });

    test('should create a game instance', () => {
      expect(game).toBeInstanceOf(Chutes_and_ladders);
    });

    test('verify that each avatar is being created', () => {
      expect(game.registerPlayer.length).toBe(2);
    });

    test('avatars chosen are no longer available', () => {
      expect(game.availableAvatars).toEqual([Color.PURPLE, Color.RED]);
    });

    test('should not allow more than four players to be registered', () => {
      game.registerPlayer('London', Color.PURPLE);
      game.registerPlayer('Brooklyn', Color.RED);
      game.registerPlayer('Austin', Color.GREEN);
      expect(game.registeredPlayers).toHaveLength(4);
    });

    test('should set up the game with registered players', () => {
      game.setUpGame();
      game.registeredPlayers.map((player) => {
        expect(player.avatar.location.value).toEqual(1);
      });
    });
  });
});
