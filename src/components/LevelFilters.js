import React, {Component} from 'react';
import Checkbox from './Checkbox';

const LEVELOPTIONS = ["Internship", "Entry Level", "Junior", "Mid-level", "Senior", "Management"];

export default class LevelFilters extends Component {

  state = {
    checkboxes: LEVELOPTIONS.reduce(
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
    return options.map(this.createCheckbox);
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

  handleLevelsFilter = (event) => {
    event.preventDefault();
    let levels = [], key
    for (key in this.state.checkboxes) {
      if (this.state.checkboxes[key] === true) {
        levels.push(key)
      }
    }
    this.props.handleFilters('levels', levels);
  }

  render() {
    return(
      <div>
      Levels:
      { this.createCheckboxes(LEVELOPTIONS) }
      <button onClick={ (event) => this.handleLevelsFilter(event) }>Submit</button>
      </div>
    )
  }
}
