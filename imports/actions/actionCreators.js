export function clearBoard() {
  return {
    type: 'CLEAR_BOARD',
  }
}

export function startGenerationCounter(gameSpeed, generations, isRunning, board) {
  return {
    type: 'START_GENERATION_COUNTER',
    gameSpeed,
    generations,
    isRunning,
    board,
  }
}

export function pauseGame() {
  return {
    type: 'PAUSE_GAME',
  }
}

export function startGame() {
  return {
    type: 'START_GAME',
  }
}

export function increaseSpeed(gameSpeed) {
  return {
    type: 'INCREASE_SPEED',
    gameSpeed,
  }
}

export function decreaseSpeed(gameSpeed) {
  return {
    type: 'DECREASE_SPEED',
    gameSpeed,
  }
}

export function setHealth(health, i) {
  return {
    type: 'SET_CELL_HEALTH',
    health,
    i,
  }
}

export function setBoardSize(rows, columns) {
  return {
    type: 'SET_BOARD_SIZE',
    rows,
    columns,
  }
}
