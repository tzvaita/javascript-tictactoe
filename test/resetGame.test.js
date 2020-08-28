import game from '../src/js/__mocks__/game';

const gameBoard = {
  Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
};

test('game board resets', () => {
  const board = {
    Player1: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
    Player2: ['X', 'O', 'X', 'O', 'X', 'O', 'X', 'O', 'X'],
  };
  expect(game.resetGame(board)).toEqual(gameBoard);
});