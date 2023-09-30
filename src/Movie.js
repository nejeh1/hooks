
import react, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Movie({list,setList}) {


  const [search, setSearch] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    rate: '',
    imagelink: '',
    description: '',
  });

  const addMovie = () => {
    setList([...list, formData]);
    setFormData({
      name: '',
      rate: '',
      imagelink: '',
      description: '',
    });
  };

  const filteredList = list.filter((movie) =>
    movie.name.toLowerCase().includes(search.toLowerCase())
    
  );

  return (
    <div className="app">
      <div className="input-container">
        <input type="text" placeholder="Name of the movie" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="text" placeholder="Rating" value={formData.rate} onChange={(e) => setFormData({ ...formData, rate: e.target.value })} />
        <input type="text" placeholder="Image Link" value={formData.imagelink} onChange={(e) => setFormData({ ...formData, imagelink: e.target.value })} />
        <input type="text" placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })} />
        <button onClick={addMovie}>Add Movie</button>
      </div>
      <div className="container">
        {filteredList.map((movie, index) => (
            <NavLink to={index.toString()}> 
          <div key={index} className="movie-card">
            <img src={movie.imagelink} alt={movie.name} />
            <p>{movie.name}</p>
            <p>Rating: {movie.rate}</p>
            <p>{movie.description}</p>
          </div></NavLink>
        ))}
      </div>
      <input
        type="text"
        placeholder="Search for a movie"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => setSearch('')}>Clear</button>
    </div>
  );
}

export default Movie;
