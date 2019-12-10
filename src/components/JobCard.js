import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import '../styles/JobContainer.css';

class JobCard extends React.Component {

  state = {
    showDetails: false
  }

  handleDetailToggle() {
    this.state.showDetails ?
    this.setState({ showDetails: false }) :
    this.setState({ showDetails: true })
  }

  render(){

    const { company, title, location, description, url } = this.props.job

    const shortDescription = description.slice(0, 99).concat('...');

    return(
      <div className='jobCard'>
      <button
      onClick={ () => this.handleDetailToggle() }
      id='details'>
      { this.state.showDetails ? 'Show Less' : 'Show More' }</button>
      {
        this.state.showDetails ?
        <div>
        <b>{ company }</b> <br></br>
           { title } <br></br>
           { location }
           { ReactHtmlParser(description) }
           { url }
        </div>
        :
        <div>
        <b>{ company }</b> <br></br>
           { title } <br></br>
           { location }
           { ReactHtmlParser(shortDescription) }
        </div>
      }
      </div>
    )
  }

}

export default JobCard;
