import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import Results from './components/results';
import Nominations from './components/nominations';

function App() {
  const [movies, setMovies] = useState([]);
  const [show, setShow] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [nominated, setNominated] = useState([]);
  const [nominatedPoster, setNominatedPoster] = useState([]);
  const [enable, setEnable] = useState([]);
  const [reset, setReset] = useState(false);

  useEffect(() => {
    if (localStorage.getItem('nominated')) {
      let moviesText = localStorage.getItem('nominated');
      console.log("hello");
      console.log(moviesText);
      moviesText = JSON.parse(moviesText)
      console.log(moviesText);
      setNominated(moviesText);

    }
  }, []);

  console.log('movies from app', nominated)

  return (
    <div class="body">
    <div class="header">
        <h1 class="title">
          <img alt='trophy' src='./trophy.png' height='70px'/>
          <span class="text">
          The Shoppies
        </span>
        </h1>
        </div>

        <SearchBar 
        setMovies={setMovies} 
        setShow={setShow} 
        setSearchValue={setSearchValue} 
        setReset={setReset} />

        <div class="bottom">
          <Results 
          movies={movies} 
          setMovies={setMovies} 
          show={show} 
          searchValue={searchValue} 
          nominated={nominated} 
          setNominated={setNominated} 
          enable={enable} 
          setEnable={setEnable} 
          nominatedPoster={nominatedPoster} 
          setNominatedPoster={setNominatedPoster} />

          <Nominations 
          movies={movies} 
          nominated={nominated} 
          setNominated={setNominated} 
          nominatedPoster={nominatedPoster} 
          enable={enable} 
          setEnable={setEnable} />
        </div>
      </div>
  );
}

export default App;