import React from 'react';
import ReactHtmlParser from 'react-html-parser';

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
      <div>
      {
        this.state.showDetails ?
        <div>
        <b>{ company }</b> <br></br>
           { title } <br></br>
           { location }
           { description }
           { url }
           <br></br>
           <br></br>
           <button onClick={ () => this.handleDetailToggle() }>
           { this.state.showDetails ? '-' : '+' }</button>
           <br></br>
            ---------------------
            <br></br>
            ---------------------
            <br></br>
        </div>
        :
        <div>
        <b>{ company }</b> <br></br>
           { title } <br></br>
           { location }
           { ReactHtmlParser(shortDescription) }
           <br></br>
           <br></br>
           <button onClick={ () => this.handleDetailToggle() }>
           { this.state.showDetails ? '-' : '+' }</button>
           <br></br>
            ---------------------
            <br></br>
            ---------------------
            <br></br>
        </div>
      }
      </div>
    )
  }

}

export default JobCard;
