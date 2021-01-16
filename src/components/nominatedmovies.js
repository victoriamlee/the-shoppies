// import logo from './logo.svg';
import React, {useState, useEffect} from 'react';
import '../App.css';

const NominatedMovies = (props) => {

  const handleClick = () => {
    console.log("Removed!");
    const removeNomination = props.nominated.filter(e => e.title !== props.title);
    console.log(removeNomination)
    props.setNominated(removeNomination);
    const nominatedArr = JSON.stringify(removeNomination)
    localStorage.setItem('nominated', nominatedArr);

    props.setEnable(props.enable.concat(props.title));
  }

  return (
        <ul>
          <li class="movie-content">
            <img src={props.poster}></img>
            <br></br>
            <span class="movie-text">
            {props.title} 
            </span>
          <br></br>
          {/* <button>Nominate</button> */}
          <button type="button" class="btn btn-warning" onClick={handleClick}>Remove</button>
          </li>
        </ul>
  );
}

export default NominatedMovies;
