// ***************** CONSTANTS *****************
const OPPONENT_PIT_MAP = { 0: 12, 1: 11, 2: 10, 3: 9, 4: 8, 5: 7, 12: 0, 11: 1, 10: 2, 9: 3, 8: 4, 7: 5 }
const PLAYER_1_MANCALA_IDX = 6;
const PLAYER_2_MANCALA_IDX = 13;

let state = {};

const resetState = () => {
  state.board = [
    4, 4, 4, 4, 4, 4, 0, // player 1 
    4, 4, 4, 4, 4, 4, 0 // player 2
    // 0, 0, 0, 1, 2, 1, 0, // player 1 
    // 1, 0, 0, 0, 0, 1, 0 // player 2
  ];
  state.winner = null;
  state.getCurrentPlayer = () => state.players[state.currentPlayerIdx];
  state.currentPlayerIdx = 0;
  state.players = ['',''];
  state.scores = [0,0];
};

// ***************** DOM SELECTORS *****************
const scoreElem = document.querySelector('#score');
const boardElem = document.querySelector('#board');
const playerTurnElem = document.querySelector('#player-turn');

// ***************** DOM MANIPULATION HELPER FUNCTIONS *****************

const emptyElement = (nodeToEmpty) => {
  while (nodeToEmpty.firstChild) {
    nodeToEmpty.removeChild(nodeToEmpty.firstChild);
  }
}

const createPit = (idx) => {
  const pipsInPit = state.board[idx];
  // create a pit
  const pitElem = document.createElement('div');
  pitElem.classList.add('pit');
  for(let i=1; i<=pipsInPit; ++i){
    const singlePipElem = document.createElement('div');
    singlePipElem.classList.add('pip');
    pitElem.append(singlePipElem);
  }
  // pitElem.innerHTML = pipsInPit;
  pitElem.dataset.boardIdx = idx;
  return pitElem;
}

// ***************** DOM RENDER FUNCTIONS *****************
const renderBoard = () => {
  emptyElement(boardElem);
  for(let i= state.board.length - 1; i >= 7; --i){
    const pitElem = createPit(i);
    // append the pit
    boardElem.appendChild(pitElem);
  }
  for(let i=0; i < 7; ++i){
    const pitElem = createPit(i);
    // append the pit
    boardElem.appendChild(pitElem);
  }
}

const renderScore = () => {
  scoreElem.innerHTML = `
    <div>${state.players[0]}: ${state.board[6]}</div>
    <div>${state.players[1]}: ${state.board[13]}</div>
  `
}

const renderPlayer = () => {
  let text;
  // conditionally set text to what we want it to be
  // if we have no players yet, show the inputs
  if (!state.players[0] || !state.players[1]) {
    text = `
      <input name="player1" placeholder="Enter Player 1">
      <input name="player2" placeholder="Enter Player 2">
      <button class="start">Start Game</button>
    `
  } else {
    // if we do have players, and we have a winner
    if (state.winner){
      text = `<span class="player">${state.winner} has won!</span>`
      // if we have no winner, show whose turn it is
    } else {
      text = `It's currently <span class="player">${state.getCurrentPlayer()}</span>'s turn`
    }
  }
  // whatever we've decided the text should be, now set it on the element
  playerTurnElem.innerHTML = text;
  
  // If someone has won, create a button to give user opportunity to restart
  if (state.winner) {
    const playAgainButton = document.createElement('button');
    playAgainButton.innerHTML = `<button class="restart">Play Again!</button>`;
    playerTurnElem.appendChild(playAgainButton);
  }
}

const render = () => {
  // calls each of the render functions
  renderScore();
  renderBoard();
  renderPlayer();
}

// ***************** GAME LOGIC HELPER FUNCTIONS *****************
const gameOverForPlayer = (playerIdx) => {
  let startingIdx = playerIdx - 1 ? 0 : 7
  for(let i=startingIdx; i < startingIdx + 6; ++i){
      let pips = state.board[i];
      // if we find pips, the game is not over on this side
      if(pips) return;
  }
  return 'gameOver';
}

const checkBoard = () => {
  
  if(gameOverForPlayer(1) || gameOverForPlayer(2)) {
    state.winner = state.board[PLAYER_1_MANCALA_IDX] > state.board[PLAYER_2_MANCALA_IDX] ? state.players[0] : state.players[1];
    return 'gameOver'
  };
}

const changeTurn = () => {  
  if (state.winner) return;
  state.currentPlayerIdx = Math.abs(state.currentPlayerIdx -1);
}

const captureOpponentPips = (idxLanded) => {
  const opponentIdx = OPPONENT_PIT_MAP[idxLanded];
  const opponentPips = state.board[opponentIdx];
  
  state.board[opponentIdx] = 0;
  return opponentPips;
}

// ***************** TRIGGERED ON EACH TURN CLICK *****************

const choooseAndMovePips = (idx) => {
  const currentPlayerMancalaIdx = state.currentPlayerIdx ? PLAYER_2_MANCALA_IDX : PLAYER_1_MANCALA_IDX;
  // cannot move from mancala pit
  if(idx === PLAYER_1_MANCALA_IDX || idx === PLAYER_2_MANCALA_IDX) return;
  // pick up pips
  let pips = state.board[idx];
  // can't pick up pips from empty hole
  if(!pips) return;
  // can't pick up from opposing player's side
  let opposingPlayerIndeces = state.currentPlayerIdx ? [0,1,2,3,4,5] : [7,8,9,10,11,12];
  if(opposingPlayerIndeces.includes(idx)) return;
  if(state.board.slice(0, 6))
  state.board[idx] = 0;
  // while we still have pips in our hand
  while(pips) {
    // for each pit we drop one
    pips--;
    // leave one in that hole
    idx++;
    // if we're at the end, come back to the beginning
    if(state.board[idx] === undefined) idx = 0;
    state.board[idx]++;
  }
  // if we land in our mancala, we can play again
  const canPlayAgain = (state.currentPlayerIdx === 0 && idx === PLAYER_1_MANCALA_IDX) || (state.currentPlayerIdx === 1 && idx === PLAYER_2_MANCALA_IDX);

  // if we land in an empty spot, we capture the opponents pips
  if(!canPlayAgain && state.board[idx] === 1) {
    state.board[currentPlayerMancalaIdx] += captureOpponentPips(idx);
  }

  // make sure no one has won yet
  if(checkBoard()) return;
  if(canPlayAgain) return;
  changeTurn();
}

// ***************** EVENT LISTENERS *****************

boardElem.addEventListener('click', function({target}) {
  // if we hit a pip we want to actually click on the parent (the pit)
  if(target.className === 'pip') target = target.parentNode;
  if(target.className !== 'pit') return;
  choooseAndMovePips(Number(target.dataset.boardIdx));
  render();
})

playerTurnElem.addEventListener('click', function({target}){
  if(target.className === 'restart') {
    resetState();
    render();
  } else if (target.className === 'start') {
    const player1Input = document.querySelector('input[name=player1]');
    const player1Value = player1Input.value;
    state.players[0] = player1Value;
    const player2Input = document.querySelector('input[name=player2]');
    const player2Value = player2Input.value;
    state.players[1] = player2Value;
    render();
  }
})

resetState();
render();
