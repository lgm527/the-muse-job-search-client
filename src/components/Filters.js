import React, {Component} from 'react';
import LevelFilters from './LevelFilters';
import CompanyFilters from './CompanyFilters';
import LocationFilters from './LocationFilters';
import CategoriesFilters from './CategoriesFilters';
import '../styles/Filters.css';

export default class Filters extends Component {

  state = {
    location: [],
    company: [],
    levels: [],
    categories: []
  }

  handleFilters = (filter, termsArr) => {
    if (filter !== 'categories') {
    this.setState({ filter: termsArr })
    this.props.updateFilters(filter, termsArr)
    } else {
      this.props.updateCategoryFilter(filter, termsArr)
    }
  }

  render() {
    return(
      <div className='filters'>

      <h3>Filters:</h3>

      <LevelFilters handleFilters={ this.handleFilters } />

      <CompanyFilters
      jobs={ this.props.jobs }
      handleFilters={ this.handleFilters } />

      <LocationFilters
      jobs={ this.props.jobs }
      handleFilters={ this.handleFilters } />

      <CategoriesFilters
      jobs={ this.props.jobs }
      handleFilters={ this.handleFilters }
      cleanUpCategoryData={ this.props.cleanUpCategoryData } />

      </div>
    )
  }
}
