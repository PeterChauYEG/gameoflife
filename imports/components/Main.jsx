import React from 'react'

const Main = React.createClass({
  render () {
    return (
      <div className="main">
        <h1 className="title is-1">Conway's Game of Life</h1>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})

export default Main