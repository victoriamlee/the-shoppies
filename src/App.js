import React, {useEffect, useState} from 'react';
import './App.css';
import SearchBar from './components/searchBar';
import Results from './components/results';
import Nominations from './components/nominations';
import Banner from './components/banner';

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
      moviesText = JSON.parse(moviesText)
      setNominated(moviesText);

    }
  }, []);

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

        <Banner nominated={nominated} />

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
