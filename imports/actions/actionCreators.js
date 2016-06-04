export function clearBoard() {
  return {
    type: 'CLEAR_BOARD',
  }
}

export function startGenerationCounter(generations, isRunning) {
  return {
    type: 'START_GENERATION_COUNTER',
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