import { takeLatest, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'

function* incrementGeneration(action) {
  if (action.isRunning) {
    yield delay(action.gameSpeed)
    
    let newBoard = []
    
    for (var cell in action.board) {
      // determine state of cell
      const { health, row, column, neighbours } = action.board[cell]
      
      // determine health of neighbours
      let neighboursAlive = 0

      neighbours.forEach((cellNeighbour) => {
        action.board.forEach((neighbour) => {
          if (cellNeighbour.row === neighbour.row && cellNeighbour.column === neighbour.column) {
            if (neighbour.health === 'alive') {
              neighboursAlive++
            }            
          }
        })
      })
      
      // set new cell state
      let newHealth = null
      
      if (health === 'alive') {
        if (neighboursAlive < 2 || neighboursAlive > 3) {
          newHealth = 'dead'
        } else {
          newHealth = 'alive'
        }
      } else {
        if (neighboursAlive === 3) {
          newHealth = 'alive'
        }
      }
      
      newBoard.push({ ...action.board[cell], health: newHealth })
      
    }
    
    yield put({ type: 'UPDATE_BOARD', board: newBoard, generations: action.generations + 1 })
  }
  else {
    return
  }
}

export default function* startGenerationCounter() {
  yield * takeLatest('START_GENERATION_COUNTER', incrementGeneration)
}
