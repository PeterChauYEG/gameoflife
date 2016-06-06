import gameBoard from '../data/board'

export default function board(state = [], action) {
  switch (action.type) {
    case 'CLEAR_BOARD':
      return gameBoard
    case 'SET_CELL_HEALTH':
      const i = action.i
      return [
        ...state.slice(0, i),
        { ...state[i], health: action.health },
        ...state.slice(i + 1)
      ]
    case 'UPDATE_BOARD':
      return action.board
    case 'SET_BOARD_SIZE':
      let board = []
      // generate board
      for (let row = 0; row < action.rows; row++) {
        for (let column = 0; column < action.columns; column++) {
          // determine neighbours of cell
          let neighbours = []
          
          // top-left
          if (column - 1 < 0 && row - 1 < 0) {
            neighbours.push({
              row: action.rows - 1,
              column: action.columns - 1,
            })
          } else if (column - 1 < 0 && row - 1 >= 0) {
            neighbours.push({
              row: row - 1,
              column: action.columns - 1,
            })            
          } else if (column - 1 >= 0 && row - 1 < 0) {
            neighbours.push({
              row: action.rows - 1,
              column: column - 1,
            })            
          } else {
            neighbours.push({
              row: row - 1,
              column: column - 1,
            })            
          }
          
          // top-mid
          if (row - 1 < 0) {
            neighbours.push({
              row: action.rows - 1,
              column,
            })
          } else {
            neighbours.push({
              row: row - 1,
              column,
            })            
          }
          
          // top-right
          if (column + 1 === action.columns && row - 1 < 0) {
            neighbours.push({
              row: action.rows - 1,
              column: 0,
            })
          } else if (column + 1 === action.columns && row - 1 >= 0) {
            neighbours.push({
              row: row - 1,
              column: 0,
            })            
          } else if (column + 1 < action.columns && row - 1 < 0) {
            neighbours.push({
              row: action.rows - 1,
              column: column + 1,
            })            
          } else {
            neighbours.push({
              row: row - 1,
              column: column + 1,
            })            
          }
          
          // mid-left
          if (column - 1 < 0) {
            neighbours.push({
              row,
              column: action.columns - 1,
            })
          } else {
            neighbours.push({
              row,
              column: column - 1,
            })            
          }
          
          // mid-right
          if (column + 1 === action.columns) {
            neighbours.push({
              row,
              column: 0,
            })
          } else {
            neighbours.push({
              row,
              column: column + 1,
            })            
          }
          
          // bottom-left
          if (column - 1 < 0 && row + 1 === action.columns) {
            neighbours.push({
              row: 0,
              column: action.columns - 1,
            })
          } else if (column - 1 < 0 && row + 1 < action.columns) {
            neighbours.push({
              row: row + 1,
              column: action.columns - 1,
            })            
          } else if (column - 1 >= 0 && row + 1 === action.columns) {
            neighbours.push({
              row: 0,
              column: column - 1,
            })            
          } else {
            neighbours.push({
              row: row + 1,
              column: column - 1,
            })            
          }
          
          // bottom-mid
          if (row + 1 === action.rows) {
            neighbours.push({
              row: 0,
              column,
            })
          } else {
            neighbours.push({
              row: row + 1,
              column,
            })            
          }          
          
          // bottom-right
          if (column + 1 === action.columns && row + 1 === action.rows) {
            neighbours.push({
              row: 0,
              column: 0,
            })
          } else if (column + 1 === action.columns && row + 1 < action.rows) {
            neighbours.push({
              row: row + 1,
              column: 0,
            })            
          } else if (column + 1 > action.columns && row + 1 === action.rows) {
            neighbours.push({
              row: 0,
              column: column + 1,
            })            
          } else {
            neighbours.push({
              row: row + 1,
              column: column + 1,
            })            
          }
          
          board.push({
            row,
            column,
            health: null,
            neighbours,
          })
        }
      }
      return board
    default:
      return state
  }
}