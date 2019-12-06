import React from 'react';
import ReactHtmlParser from 'react-html-parser';

function JobCard(props) {

  const { company, title, location, description } = props.job

  const shortDescription = description.slice(0, 99).concat('...');

    return(

      <div>
      <b>{ company }</b> <br></br>
         { title } <br></br>
         { location }
         { ReactHtmlParser(shortDescription) }
         <br></br>
          ---------------------
          ---------------------
          <br></br>
      </div>
    )

}

export default JobCard;
