import React from 'react';
import './App.css';
import Search from './components/Search';
import JobContainer from './containers/JobContainer';

class App extends React.Component {

  state = {
    jobs: [],
    title: '',
    location: '',
    company: '',
    level: '',
    categories: '',
    error: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(jobs => this.setState( { jobs } ))
    .catch(err => this.setState( { error: err.message } ))
  }

  updateSearchTerm = (title) => {
    let filteredJobs = this.state.jobs.filter(job => {
      return job.title.includes(title)
    })
    this.setState({ title: title, jobs: filteredJobs })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <b>the</b>muse
        </header>
        <Search updateSearchTerm={ this.updateSearchTerm } />
        There are {this.state.jobs.length} result(s).
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
