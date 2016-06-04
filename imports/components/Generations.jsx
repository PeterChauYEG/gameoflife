import React from 'react'

const PlayArea = React.createClass({
  render () {
    this.props.startGenerationCounter(this.props.generations, this.props.controls.isRunning)
    return (
      <div className="generations">
        <h2 className="title">Generations: {this.props.generations}</h2>
      </div>
    )
  }
})

export default PlayArea