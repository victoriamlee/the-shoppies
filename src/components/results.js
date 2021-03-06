import React from 'react';
import Movies from './movies';
import '../App.css';

const Results = (props) => {
  return (
<div class="results">
        <h3 class="content">Results for "{props.searchValue}"</h3>

          {props.show && props.movies.map(movie => {
            return (
              <Movies 
                title={movie.Title}
                poster={movie.Poster}
                year={movie.Year}
                nominated={props.nominated}
                setNominated={props.setNominated}
                movies={props.movies}
                setMovies={props.setMovies}
                enable={props.enable}
                setEnable={props.setEnable}
                nominatedPoster={props.nominatedPoster}
                setNominatedPoster={props.setNominatedPoster}
              />
            )
          })
        }
      </div>
  );
}

export default Results;
