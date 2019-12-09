import React, {Component} from 'react';

export default class Search extends Component {

  state = {
    titleTerm: ''
  }

  handleTitleTerm = (event) => {
    this.setState({ titleTerm: event.target.value })
  }

  handleSearchSubmit = (event) => {
    event.preventDefault()
    this.props.updateSearchTerm(this.state.titleTerm)
  }

  render() {
    return(
      <div>
      <input type='text'
      name='titleTerm'
      value={ this.state.titleTerm }
      placeholder='Search Jobs by Title'
      onChange={ event => this.handleTitleTerm(event) }>
      </input>
      <button onClick={ event => this.handleSearchSubmit(event) }> Search </button>
      </div>
    )
  }
}
