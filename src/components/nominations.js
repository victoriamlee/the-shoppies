import '../App.css';
import NominatedMovies from './nominatedmovies';

const Nominations = (props) => {
  return (
<div class="nominations">
        <h3 class="content">Nominations</h3>

{props.nominated && props.nominated.map(movie => {
                return (
                  <NominatedMovies 
                  title={movie.title}
                  poster={movie.poster}
                  nominated={props.nominated}
                  setNominated={props.setNominated}
                  enable={props.enable}
                  setEnable={props.setEnable}
                  
                  />
                  )
          })
        }
      </div>
  );
}

export default Nominations;
