import React from 'react'

const Controls = React.createClass({
  render () {
    return (
      <div className="controls">
        <button className="button is-info is-outlined fa fa-play" onClick={this.props.startGame.bind(null)}></button>      
        <button className="button is-info is-outlined fa fa-pause" onClick={this.props.pauseGame.bind(null)}></button>
        <button className="button is-info is-outlined" onClick={this.props.clearBoard.bind(null)}>Clear</button>        
      </div>
    )
  }
})

export default Controls