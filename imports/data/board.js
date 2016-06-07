let board = []
const rows = 20
const columns = 20
const health = [null, 'alive', 'dead']

// generate board
for (let row = 0; row < rows; row++) {
  for (let column = 0; column < columns; column++) {
    // determine neighbours of cell
    let neighbours = []
    
    // top-left
    if (column - 1 < 0 && row - 1 < 0) {
      neighbours.push({
        row: rows - 1,
        column: columns - 1,
      })
    } else if (column - 1 < 0 && row - 1 >= 0) {
      neighbours.push({
        row: row - 1,
        column: columns - 1,
      })            
    } else if (column - 1 >= 0 && row - 1 < 0) {
      neighbours.push({
        row: rows - 1,
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
        row: rows - 1,
        column,
      })
    } else {
      neighbours.push({
        row: row - 1,
        column,
      })            
    }
    
    // top-right
    if (column + 1 === columns && row - 1 < 0) {
      neighbours.push({
        row: rows - 1,
        column: 0,
      })
    } else if (column + 1 === columns && row - 1 >= 0) {
      neighbours.push({
        row: row - 1,
        column: 0,
      })            
    } else if (column + 1 < columns && row - 1 < 0) {
      neighbours.push({
        row: rows - 1,
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
        column: columns - 1,
      })
    } else {
      neighbours.push({
        row,
        column: column - 1,
      })            
    }
    
    // mid-right
    if (column + 1 === columns) {
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
    if (column - 1 < 0 && row + 1 === columns) {
      neighbours.push({
        row: 0,
        column: columns - 1,
      })
    } else if (column - 1 < 0 && row + 1 < columns) {
      neighbours.push({
        row: row + 1,
        column: columns - 1,
      })            
    } else if (column - 1 >= 0 && row + 1 === columns) {
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
    if (row + 1 === rows) {
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
    if (column + 1 === columns && row + 1 === rows) {
      neighbours.push({
        row: 0,
        column: 0,
      })
    } else if (column + 1 === columns && row + 1 < rows) {
      neighbours.push({
        row: row + 1,
        column: 0,
      })            
    } else if (column + 1 > columns && row + 1 === rows) {
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

    // determine random health
    var randomIndex = Math.floor(Math.random()*health.length)
    
    board.push({
      row,
      column,
      health: health[randomIndex],
      neighbours,
    })
  }
}

export default board
