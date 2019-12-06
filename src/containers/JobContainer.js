import React, {Component} from 'react';
import JobCard from '../components/JobCard';
import JobDetail from '../components/JobDetail';

export default class JobContainer extends Component {

  render() {
    const allJobs = this.props.jobs.map((job) => <JobCard key={job.id} job={job} />)
    return(
      <div>
      { allJobs }
      </div>
    )
  }
}
