/* eslint-disable no-undef */

const resultElement = document.getElementById('gameResult');

// eslint-disable-next-line no-unused-vars
const DOM = (() => {
  const showResult = (result) => {
    resultElement.innerHTML = result;
    document.querySelector('.result-popup').style.display = 'flex';
  };

  const displayController = (p1, p2) => {
    let player = p1;
    const boxes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    boxes.map((i) => {
      const target = document.getElementById(i);
      return target.addEventListener(
        'click',
        (e) => {
          const box = e.target.id;
          const el = document.getElementById(box);
          game.markElement(el, player);
          player = player === p1 ? p2 : p1;
        },
        { once: true },
      );
    });
  };

  return {
    showResult,
    displayController,
  };
})();

const playAgain = document.getElementById('playAgain');
playAgain.addEventListener('click', () => {
  game.resetGame();
  document.querySelector('.result-popup').style.display = 'none';
  document.querySelector('.player-popup').style.display = 'flex';
});
