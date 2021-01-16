// import logo from './logo.svg';
import '../App.css';
import React, {useState, useEffect} from 'react';

const Movies = (props) => {
  
  const [disabled, setDisabled] = useState("");

  const handleClick = () => {
    console.log("Nominate!");
    const nominatedObj = {title: props.title, poster: props.poster}
    props.setNominated(props.nominated.concat(nominatedObj));
    let nominatedArr = [];

    for (let movie of props.nominated) {
      nominatedArr.push(movie)
    }

    nominatedArr.push(nominatedObj)
    nominatedArr = JSON.stringify(nominatedArr)
    localStorage.setItem('nominated', nominatedArr);
    setDisabled("true");
  };

  useEffect(() => {
    setDisabled("");
  },[props.movies])

    for (let removed of props.enable) {

      if (disabled === "true" && removed === props.title) {
        setDisabled("")
        props.setEnable([]);
      } 
    }
  
  return (

        <ul>
          <li class="movie-content">
            <img class="poster" src={props.poster}></img>
            <span class="movie-text">
            {props.title} 
            </span>
            <div class="overlay"></div>
          <button type="button" class="btn btn-warning" id="button" onClick={handleClick} disabled={disabled}>Nominate</button>
          </li>
        </ul>
  );
}

export default Movies;
