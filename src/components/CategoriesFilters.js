import React, {Component} from 'react';
import Checkbox from './Checkbox';

export default class CategoriesFilters extends Component {

  categoryOPTIONS = () => {
    if (this.props.jobs) {
      let categories = this.props.jobs.map((job) => {
         if (job.categories !== "[]") {
           return this.props.cleanUpCategoryData(job.categories)
         }
       })
       let uniqueCategories = [...new Set(categories)]
       let cleanCategories = uniqueCategories.filter((cat) => {
         if (cat !== undefined) {
           return cat
         }
       })
      return cleanCategories;
    }
  }

  state = {
    checkboxes: this.categoryOPTIONS().reduce(
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

  handleCategoriesFilter = (event) => {
    event.preventDefault();
    let categories = [], key
    for (key in this.state.checkboxes) {
      if (this.state.checkboxes[key] === true) {
        categories.push(key)
      }
    }
    this.props.handleFilters('categories', categories);
  }

  render() {
    return(
      <div>
      Categories:
      { this.createCheckboxes(this.categoryOPTIONS()) }
      <button onClick={ (event) => this.handleCategoriesFilter(event) }>Submit</button>
      </div>
    )
  }
}
