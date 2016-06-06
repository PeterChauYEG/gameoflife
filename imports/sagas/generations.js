import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

function* incrementGeneration(action) {
  if (action.isRunning) {
    yield delay(action.gameSpeed)
    
    let newBoard = []
    
    for (var cell in action.board) {
      // determine state of cell
      const { health, row, column } = action.board[cell]

      // determine neighbours of cell
      const neighbours = action.board.filter((neighbour) => {
        if (neighbour.row === row - 1) {
          if (neighbour.column === column - 1) {
            return true
          }
          if (neighbour.column === column) {
            return true
          }
          if (neighbour.column === column + 1) {
            return true
          }
        }
        if (neighbour.row === row) {
          if (neighbour.column === column - 1) {
            return true
          }
          if (neighbour.column === column + 1) {
            return true
          }
        }
        if (neighbour.row === row + 1) {
          if (neighbour.column === column - 1) {
            return true
          }
          if (neighbour.column === column) {
            return true
          }
          if (neighbour.column === column + 1) {
            return true
          }
        }
      })
      
      // determine health of neighbours
      let neighboursAlive = 0
      let neighboursDead = 0
      
      neighbours.forEach((neighbour) => {
        if (neighbour.health === 'alive') {
          neighboursAlive++
        } else if (neighbour.health === 'dead') {
          neighboursDead++
        }
      })
      
      // set new cell state
      let newHealth = null
      
      if (health === 'alive') {
        if (neighboursAlive < 2) {
          newHealth = 'dead'
        } else if (neighboursAlive === 2 || neighboursAlive === 3) {
          newHealth = 'alive'
        } else if (neighboursAlive > 3) {
          newHealth = 'dead'
        }
      } else if (health === 'dead') {
        if (neighboursAlive === 3) {
          newHealth = 'alive'
        }
      }
      
      newBoard.push({ ...action.board[cell], health: newHealth })
      
    }
    
    yield put({ type: 'SET_BOARD', board: newBoard })
    yield put({ type: 'SET_GENERATION', generations: action.generations + 1 })
  }
  else {
    return
  }
}

export default function* startGenerationCounter() {
  yield * takeLatest('START_GENERATION_COUNTER', incrementGeneration)
}
