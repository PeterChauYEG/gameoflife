import React from 'react'

const Controls = React.createClass({
  render () {
    return (
      <div className="controls">
        <button className="button is-info is-outlined fa fa-fast-backward" onClick={this.props.decreaseSpeed.bind(null, this.props.controls.gameSpeed)}></button>       
        <button className="button is-info is-outlined fa fa-play" onClick={this.props.startGame.bind(null)}></button>
        <button className="button is-info is-outlined fa fa-pause" onClick={this.props.pauseGame.bind(null)}></button>
        <button className="button is-info is-outlined fa fa-fast-forward" onClick={this.props.increaseSpeed.bind(null, this.props.controls.gameSpeed)}></button>            
        <button className="button is-info is-outlined" onClick={this.props.clearBoard.bind(null)}>Clear</button>        
        <button className="button is-info is-outlined" onClick={this.props.setBoardSize.bind(null, 10, 10)}>10x10</button> 
        <button className="button is-info is-outlined" onClick={this.props.setBoardSize.bind(null, 20, 20)}>20x20</button> 
        <button className="button is-info is-outlined" onClick={this.props.setBoardSize.bind(null, 30, 30)}>30x30</button>         
      </div>
    )
  }
})

export default Controls