export function clearBoard() {
  return {
    type: 'CLEAR_BOARD',
  }
}

export function startGenerationCounter(gameSpeed, generations, isRunning) {
  return {
    type: 'START_GENERATION_COUNTER',
    gameSpeed,
    generations,
    isRunning,
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