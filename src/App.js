import React from 'react';
import './App.css';
import Search from './components/Search';
import JobContainer from './containers/JobContainer';

class App extends React.Component {

  state = {
    jobs: [],
    searchTerms: {
      title: '',
      location: '',
      company: '',
      level: '',
      categories: ''
    },
    error: ''
  }

  componentDidMount() {
    fetch('http://localhost:3000/jobs')
    .then(res => res.json())
    .then(jobs => this.setState( { jobs } ))
    .catch(err => this.setState( { error: err.message } ))
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <b>the</b>muse
        </header>
        <Search />
        {this.state.error ?
          <p>{this.state.error}</p>
          :
          <JobContainer jobs={ this.state.jobs } />
        }
      </div>
    )
  }
}

export default App;
