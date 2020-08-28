// eslint-disable

const game = (() => {
  const checkStatus = (arr, player, boxCount = 9) => {
    let result = null;
    if (
      (arr[0] === arr[1] && arr[1] === arr[2])
      || (arr[3] === arr[4] && arr[4] === arr[5])
      || (arr[6] === arr[7] && arr[7] === arr[8])
      || (arr[0] === arr[3] && arr[3] === arr[6])
      || (arr[1] === arr[4] && arr[4] === arr[7])
      || (arr[2] === arr[5] && arr[5] === arr[8])
      || (arr[0] === arr[4] && arr[4] === arr[8])
      || (arr[2] === arr[4] && arr[4] === arr[6])
    ) {
      result = `${player} wins`;
    } else if (boxCount === 9) {
      result = 'Game Draw';
    }

    return result;
  };

  const updatePlayers = (gameBoard, p1 = 'Player1', p2 = 'Player2') => {
    if (p1 !== 'Player1' && p2 !== 'Player2') {
      gameBoard[p1] = gameBoard.Player1;
      gameBoard[p2] = gameBoard.Player2;
      delete gameBoard.Player1;
      delete gameBoard.Player2;
    }
    return gameBoard;
  };

  const resetGame = (gameBoard) => {
    gameBoard = {
      Player1: [1, 2, 3, 4, 5, 6, 7, 8, 9],
      Player2: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    };
    return gameBoard;
  };

  return { checkStatus, updatePlayers, resetGame };
})();

export default game;