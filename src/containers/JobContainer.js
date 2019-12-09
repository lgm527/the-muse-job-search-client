import React, {Component} from 'react';
import JobCard from '../components/JobCard';
import '../styles/JobContainer.css';

export default class JobContainer extends Component {

  render() {
    const allJobs = this.props.jobs.map((job) => <JobCard key={job.id} job={job} />)
    return(
      <div className='jobContainer'>
      { allJobs }
      </div>
    )
  }
}
