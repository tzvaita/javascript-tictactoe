import game from '../src/js/__mocks__/game';

let board = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const player = 'Ramesh';

test('Check the game win for horizontal case', () => {
  board = ['X', 'X', 'X', 4, 5, 6, 7, 8, 9];
  expect(game.checkStatus(board, player)).toBe(`${player} wins`);
});

test('Check the game win for vertical case', () => {
  board = ['O', 2, 3, 'O', 5, 6, 'O', 8, 9];
  expect(game.checkStatus(board, player)).toBe(`${player} wins`);
});


test('Check the game win for diagonal case', () => {
  board = [1, 2, 'X', 4, 'X', 6, 'X', 8, 9];
  expect(game.checkStatus(board, player)).toBe(`${player} wins`);
});

test('Check the game draw logic', () => {
  board = ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'];
  expect(game.checkStatus(board, player)).toBe('Game Draw');
});
