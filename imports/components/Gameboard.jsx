import React from 'react'

// import components
import CellRow from './CellRow'

const Gameboard = React.createClass({
  render () {
    let currentRow = 0;
    return (
      <div className="gameboard">
        {this.props.board.map((cell, i) => {
          if (cell.row === currentRow) {
            currentRow = currentRow + 1
            return  <CellRow {...this.props} key={i} row={cell.row} />
          }
        })}
      </div>
    )
  }
})

export default Gameboard