import React, {Component} from 'react';
import LevelFilters from './LevelFilters';
import CompanyFilters from './CompanyFilters';

export default class Filters extends Component {

  state = {
    location: [],
    company: [],
    levels: [],
    categories: []
  }

  handleFilters = (filter, termsArr) => {
    this.setState({ filter: termsArr })
    this.props.updateFilters(filter, termsArr)
  }

  render() {
    return(
      <div>

      <LevelFilters handleFilters={ this.handleFilters } />

      <CompanyFilters jobs={ this.props.jobs } handleFilters={ this.handleFilters } />

      </div>
    )
  }
}
