import React from 'react'

const GameInfo = React.createClass({
  render () {
    return (
      <div className="game-info">
        <p className="subtitle">Generations: {this.props.generations}</p>
        <p className="subtitle">{this.props.controls.boardSize.rows} x {this.props.controls.boardSize.columns}</p>
        <p className="subtitle">Game Speed: {this.props.controls.gameSpeed}ms</p>
      </div>
    )
  }
})

export default GameInfo