import game from '../src/js/__mocks__/game';

test('add player names', () => {
  const gameBoard = {
    Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  game.updatePlayers(gameBoard, 'Ramesh', 'Tenny');
  expect(Object.keys(gameBoard)).toEqual(['Ramesh', 'Tenny']);
});

test('default player names', () => {
  const gameBoard = {
    Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  };
  game.updatePlayers(gameBoard);
  expect(Object.keys(gameBoard)).toEqual(['Player1', 'Player2']);
});