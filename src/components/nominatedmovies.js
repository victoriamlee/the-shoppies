import React from 'react';
import '../App.css';

const NominatedMovies = (props) => {

  const handleClick = () => {
    console.log("Removed!");
    const removeNomination = props.nominated.filter(e => e.title !== props.title);
    props.setNominated(removeNomination);
    const nominatedArr = JSON.stringify(removeNomination)
    localStorage.setItem('nominated', nominatedArr);

    props.setEnable(props.enable.concat(props.title));
  }

  return (
        <ul>
          <li class="movie-content">
            <img class="poster" src={props.poster}></img>
            <span class="movie-text">
            {props.title} 
            <br></br>
            <span class="year">
            ({props.year})
            </span>
            </span>
          <div class="overlay"></div>
          <button type="button" class="btn btn-warning" id="button" onClick={handleClick}>Remove</button>
          </li>
        </ul>
  );
}

export default NominatedMovies;
