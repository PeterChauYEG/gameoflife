import React from 'react'

const GameInfo = React.createClass({
  render () {
    return (
      <div className="game-info">
        <p className="subtitle is-4">Generations: {this.props.generations}</p>
        <p className="subtitle is-4">{this.props.controls.boardSize.rows} x {this.props.controls.boardSize.columns}</p>
        <p className="subtitle is-4">Game Speed: {+this.props.controls.gameSpeed.toFixed(2)}ms</p>
      </div>
    )
  }
})

export default GameInfo