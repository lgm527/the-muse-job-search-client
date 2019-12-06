import React, {Component} from 'react'

export default class JobContainer extends Component {

  state = {
    titleTerm: ''
  }

  handleTitleTerm = (event) => {
    this.setState({ titleTerm: event.target.value })
  }

  handleSearchSubmit = () => {
    console.log('hi')
  }

  render(){
    return(
      <div>
      <input type='text'
      name='titleTerm'
      value={ this.state.titleTerm }
      placeholder='Search Jobs by Title'
      onChange={ event => this.handleTitleTerm(event) }>
      </input>
      <button onClick={ this.handleSearchSubmit }> Search </button>
      </div>
    )
  }
}
