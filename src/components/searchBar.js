import React, {useState} from 'react';
import axios from 'axios';
import '../App.css';

const SearchBar = (props) => {
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  }

  const handleSearch = e => {
    if (e.key === 'Enter') {
      console.log("search!")
      axios.get('http://www.omdbapi.com/?apikey=9a35189f&s=' + encodeURI(search))
        .then(res => {
          props.setMovies(res.data.Search);
          props.setShow(true);
          props.setSearchValue(search);
        })
    }
  }

  return (
    <div class="search">
      <h2 class="content">Movie title</h2>
      <div class="form-group has-feedback has-search">
        <span class="glyphicon glyphicon-search form-control-feedback"></span>
        <input type="text" class="form-control" name='search' placeholder="Search" onChange={handleChange} onKeyDown={handleSearch}/>
      </div>

    </div>
  );
}

export default SearchBar;
