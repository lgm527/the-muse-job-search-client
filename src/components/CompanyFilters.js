import React, {Component} from 'react';
import Checkbox from './Checkbox';
import '../styles/Filters.css';

export default class CompanyFilters extends Component {

  companyOPTIONS = () => {
    if (this.props.jobs) {
      let companies = this.props.jobs.map((job) => {
         return job.company
       })
       let uniqueCompanies = [...new Set(companies)]
      return uniqueCompanies;
    }
  }

  state = {
    checkboxes: this.companyOPTIONS().reduce(
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

  handleCompaniesFilter = (event) => {
    event.preventDefault();
    let companies = [], key
    for (key in this.state.checkboxes) {
      if (this.state.checkboxes[key] === true) {
        companies.push(key)
      }
    }
    this.props.handleFilters('company', companies);
  }

  render() {
    return(
      <div className='company'>
      <h4>Companies:</h4>
        <div className='boxes'>
          { this.createCheckboxes(this.companyOPTIONS()) }
        </div>
      <button onClick={ (event) => this.handleCompaniesFilter(event) }>Submit</button>
      </div>
    )
  }
}
