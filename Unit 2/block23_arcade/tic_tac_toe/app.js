let gameState = {};

const resetState = () => {
  gameState.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];
  gameState.winner = null;
  gameState.currentPlayer = 'X';
  gameState.turnCount = 0;
};

const checkBoard = () => {
  const combinations = [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ];
  let winner = null;
  combinations.find(combination => {
    const players = {X: 0, O: 0};
    combination.find(coordinates => {
      const [y, x] = coordinates;
      const mark = gameState.board[y][x];
      if(mark){
        players[mark]++;
      }
    })
    for(const player in players) {
      console.log('player', player);
      console.log('player score',  players[player]);
      if(players[player] === 3) {
        winner = player;
        return true
      }
    }
  })
  return winner;
}

const changeTurn = () => {
  gameState.winner = checkBoard();
  if (!gameState.winner) gameState.currentPlayer = gameState.currentPlayer === 'X' ? 'O' : 'X';
}

const emptyElement = (nodeToEmpty) => {
  while (nodeToEmpty.firstChild) {
    nodeToEmpty.removeChild(nodeToEmpty.firstChild);
  }
}

const renderBoard = () => {
  const boardElem = document.querySelector('#board');
  emptyElement(boardElem);
  for(let y=0; y<gameState.board.length; ++y){
      const row = gameState.board[y];
      // create a row
      for(let x=0; x<row.length; ++x){
          let column = row[x];
          // create a cell in the row
          const cellElem = document.createElement('div');
          cellElem.classList.add('cell');
          cellElem.innerHTML = gameState.board[y][x];
          cellElem.dataset.coordinates = `${y},${x}`;
          // append the cell
          boardElem.appendChild(cellElem);
      }
  }
}

const renderPlayer = () => {
  const playerTurnDiv = document.querySelector('#player-turn');
  let text;
  if (gameState.winner){
    text = `<span class="player"> ${gameState.currentPlayer} has won!</span>`
  } else if(gameState.turnCount >= 9) {
    text = `<span class="player"> It's a draw! </span>`
  } else {
    text = `It's currently <span class="player"> player ${gameState.currentPlayer}</span>'s turn`
  }
  playerTurnDiv.innerHTML = text;

  if (gameState.winner || gameState.turnCount >= 9) {
    const playAgainButton = document.createElement('button');
    playAgainButton.innerHTML = `<button class="restart">Play Again!</button>`;
    playerTurnDiv.appendChild(playAgainButton);
  }
}

const takeTurn = (coordinates) => {
  const [xCoord, yCoord] = coordinates;
  gameState.board[xCoord][yCoord] = gameState.currentPlayer;
  gameState.turnCount++;
  changeTurn();
  renderPlayer();
}


const boardElem = document.querySelector('#board');

boardElem.addEventListener('click', function({target}){
  if(target.className !== 'cell') return;
  const cellElem = target;
  const [y, x] = cellElem.dataset.coordinates.split(',');
  if (gameState.board[y][x] || gameState.winner) return;
  takeTurn([y, x]);
  renderBoard();
});

const playerTurnElem = document.querySelector('#player-turn');
playerTurnElem.addEventListener('click', function(){
  if(target.className !== 'restart') return;
  console.log('restarting')
  resetState();
  renderBoard();
  renderPlayer();
})

resetState()
renderBoard();
renderPlayer();
