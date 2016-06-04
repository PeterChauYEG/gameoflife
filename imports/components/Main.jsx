import React from 'react'

// import components
import PlayArea from './PlayArea'

const Main = React.createClass({
  render () {
    return (
      <div className="main">
        <h1 className="title">Conway's Game of Life</h1>
        <PlayArea {...this.props} />
      </div>
    )
  }
})

export default Main