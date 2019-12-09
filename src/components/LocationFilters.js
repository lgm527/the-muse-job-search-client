import React, {Component} from 'react';
import Checkbox from './Checkbox';
import '../styles/Filters.css';

export default class LocationFilters extends Component {

  locationOPTIONS = () => {
    if (this.props.jobs) {
      let locations = this.props.jobs.map((job) => {
         return job.location
       })
       let uniqueLocations = [...new Set(locations)]
      return uniqueLocations;
    }
  }

  state = {
    checkboxes: this.locationOPTIONS().reduce(
      (options, option) => ({
        ...options,
        [option]: false
      }),
      {}
    )
  }

  createCheckbox = (option) => (
    <Checkbox
      label={ option }
      isChecked={ this.state.checkboxes[option] }
      onCheckboxChange={ this.handleCheckboxChange }
      key={ option }
    />
  );

  createCheckboxes = (options) => {
    if (options) {
      return options.map(this.createCheckbox);
    }
  }

  handleCheckboxChange = (event) => {
    const { name } = event.target;
    this.setState(prevState => ({
      checkboxes: {
        ...prevState.checkboxes,
        [name]: !prevState.checkboxes[name]
      }
    }));
  }

  handleLocationsFilter = (event) => {
    event.preventDefault();
    let locations = [], key
    for (key in this.state.checkboxes) {
      if (this.state.checkboxes[key] === true) {
        locations.push(key)
      }
    }
    this.props.handleFilters('location', locations);
  }

  render() {
    return(
      <div className='location'>
      <h4>Locations:</h4>
        <div className='boxes'>
          { this.createCheckboxes(this.locationOPTIONS()) }
        </div>
      <button onClick={ (event) => this.handleLocationsFilter(event) }>Submit</button>
      </div>
    )
  }
}
