import React from 'react'

const Main = React.createClass({
  render () {
    return (
      <section className="hero is-primary is-bold is-fullheight">
        <div className="container">
          <h1 className="title is-1">
            Conway's Game of Life
          </h1>
            {React.cloneElement(this.props.children, this.props)}
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed is-fullwidth">
            <div className="container">
              <a href="https://github.com/PeterChauYEG/gameoflife" className="button is-primary is-outlined">
                <span class="icon">
                  <i className="fa fa-github"> Conway's Game of Life</i>
                </span>
              </a>
            </div>
          </nav>
        </div>          
      </section>      
    )
  }
})

export default Main