import React from 'react'

// import components
import Controls from './Controls'
import Gameboard from './Gameboard'
import GameInfo from './GameInfo'

const PlayArea = React.createClass({
  render () {
    this.props.startGenerationCounter(this.props.controls.gameSpeed, this.props.generations, this.props.controls.isRunning, this.props.board)
    return (
      <div className="play-area">
        <GameInfo {...this.props} />
        <Gameboard {...this.props} />
        <Controls {...this.props} />
      </div>
    )
  }
})

export default PlayArea