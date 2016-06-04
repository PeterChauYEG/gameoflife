import React from 'react'

// import components
import Gameboard from './Gameboard'
import Generations from './Generations'

const PlayArea = React.createClass({
  render () {
    return (
      <div className="play-area">
        <Generations {...this.props} />
        <Gameboard {...this.props} />
      </div>
    )
  }
})

export default PlayArea