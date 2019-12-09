import React from 'react';
import './App.css';
import Search from './components/Search';
import Filters from './components/Filters';
import JobContainer from './containers/JobContainer';

class App extends React.Component {

  state = {
    jobs: [],
    title: '',
    location: [],
    company: [],
    levels: [],
    categories: [],
    error: ''
  }

  componentDidMount(){
    this.fetchJobs();
  }

  fetchJobs = () => {
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(jobs => this.setState( { jobs } ))
    .catch(err => this.setState( { error: err.message } ))
  }

  resetList = () => {
    this.fetchJobs();
    this.setState({
      title: '',
      locations: [],
      companies: [],
      levels: [],
      categories: []
    })
  }

  updateSearchTerm = (title) => {
    let searchJobs = this.state.jobs.filter(job => {
      return job.title.includes(title)
    })
    this.setState({ title: title, jobs: searchJobs })
  }

  updateFilters = (filter, termsArr) => {
    let filteredJobs = []
     termsArr.forEach((term) => {
      return this.state.jobs.filter(job => {
        if (job[filter] === term) {
          filteredJobs.push(job);
        }
      })
    })
    this.setState({ jobs: filteredJobs, filter: termsArr })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <b>the</b>muse
          <button onClick={ () => this.resetList() }>Reset Search</button>
        </header>

        <Search updateSearchTerm={ this.updateSearchTerm } />

        There are { this.state.jobs ? this.state.jobs.length : 'none' } result(s).

        <Filters
        updateFilters={ this.updateFilters }
        jobs={ this.state.jobs } />

        { this.state.error ?
          <p>{ this.state.error }</p>
          :
          <JobContainer jobs={ this.state.jobs } />
        }
      </div>
    )
  }
}

export default App;
