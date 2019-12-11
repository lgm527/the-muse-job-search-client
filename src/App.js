import React from 'react';
import './styles/App.css';
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
      let databaseTitle = job.title.toLowerCase();
      let userInputTitle = title.toLowerCase();
       if (databaseTitle.includes(userInputTitle)) {
         return job;
       }
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

  updateCategoryFilter = (filter, termsArr) => {
    let filteredJobs = []
     termsArr.forEach((term) => {
      return this.state.jobs.filter(job => {
        if (this.cleanUpCategoryData(job[filter]) === term) {
          filteredJobs.push(job);
        }
      })
    })
    this.setState({ jobs: filteredJobs, filter: termsArr })
  }

  cleanUpCategoryData = (category) => {
    let cat = category.replace(/\W/g, '')
    return cat.replace('name', '')
  }

  render() {
    return (
      <div className="App">

        <header className="App-header">
          <span id='logo'><span id='the'><b>the</b></span>muse</span>
        </header>

        <div className='userInput'>
          <div id='searching'>
          <Search
          updateSearchTerm={ this.updateSearchTerm }
          resetList={ this.resetList } />
          <p>There are { this.state.jobs ? this.state.jobs.length : 'none' } result(s).</p>

          </div>

          <div id='filtering'>
          <Filters
          updateFilters={ this.updateFilters }
          jobs={ this.state.jobs }
          cleanUpCategoryData={ this.cleanUpCategoryData }
          updateCategoryFilter={ this.updateCategoryFilter } />
          </div>
        </div>

        <div className='jobs'>
          { this.state.error ?
            <p>{ this.state.error }</p>
            :
            <JobContainer jobs={ this.state.jobs } />
          }
        </div>
        <div id='clear'></div>
      </div>
    )
  }
}

export default App;
