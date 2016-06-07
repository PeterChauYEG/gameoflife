import React from 'react'

const Controls = React.createClass({
  render () {
    return (
      <div className="controls">
        <button className="button is-info is-outlined fa fa-fast-backward" onClick={this.props.decreaseSpeed.bind(null, this.props.controls.gameSpeed)}></button>       
        <button className={`button is-info ${this.props.controls.isRunning ? '' : 'is-outlined'} fa fa-play`} onClick={this.props.startGame.bind(null)}></button>
        <button className={`button is-info ${this.props.controls.isRunning ? 'is-outlined' : ''} fa fa-pause`} onClick={this.props.pauseGame.bind(null)}></button>
        <button className="button is-info is-outlined fa fa-fast-forward" onClick={this.props.increaseSpeed.bind(null, this.props.controls.gameSpeed)}></button>            
        <button className="button is-info is-outlined" onClick={this.props.generateRandomBoard.bind(null)}>Generate Random Board</button>        
        <button className={`button is-info ${this.props.controls.boardSize.rows === 20 && this.props.controls.boardSize.columns === 20 ? '' : 'is-outlined'}`} onClick={this.props.setBoardSize.bind(null, 20, 20)}>20 x 20</button> 
        <button className={`button is-info ${this.props.controls.boardSize.rows === 25 && this.props.controls.boardSize.columns === 25 ? '' : 'is-outlined'}`} onClick={this.props.setBoardSize.bind(null, 25, 25)}>25 x 25</button> 
        <button className={`button is-info ${this.props.controls.boardSize.rows === 30 && this.props.controls.boardSize.columns === 30 ? '' : 'is-outlined'}`} onClick={this.props.setBoardSize.bind(null, 30, 30)}>30 x 30</button>         
      </div>
    )
  }
})

export default Controls