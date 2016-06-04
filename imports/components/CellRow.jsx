import React from 'react'

// import components
import Cell from './Cell'

const CellRow = React.createClass({
  render () {
    return (
      <div className="cell-row">
        {this.props.board.map((cell, i) => {
          if (cell.row === this.props.row) {
            return  <Cell {...this.props} key={i} row={cell.row} column={cell.column} />
          }
        })}
      </div>
    )
  }
})

export default CellRow