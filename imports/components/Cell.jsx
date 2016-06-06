import React from 'react'

const CellRow = React.createClass({
  render () {
    const i = this.props.i
    const cell = this.props.board[i]
    const health = cell.health === null ? 'cell' : `cell ${cell.health}`
    return (
      <div className={health} onClick={this.props.setHealth.bind(null, 'alive', i)}></div>
    )
  }
})

export default CellRow