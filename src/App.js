
import react, { useRef } from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [list, setList] = useState([
    { name: "Harry Potter", rate: "4", imagelink: "https://fr.web.img2.acsta.net/pictures/18/07/02/17/25/3643090.jpg", description: "He has a magic stick" },
    { name: "Vikings", rate: "5", imagelink: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTQOtj4pUXP9fzyUz5gVYkZt3_1Z1gCNsGEPmT5snx_Xxhp0UNo", description: "They kill people everywhere they go" },
    { name: "Moon Knight", rate: "5", imagelink: "https://www.francetvinfo.fr/pictures/uGKKmvQfk93jmlwrBiff7JkQcno/fit-in/720x/2022/03/15/php8A3zAY.jpg", description: "He is not a hero; he lives in a mental institution" }
  ]);

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
          <div key={index} className="movie-card">
            <img src={movie.imagelink} alt={movie.name} />
            <p>{movie.name}</p>
            <p>Rating: {movie.rate}</p>
            <p>{movie.description}</p>
          </div>
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

export default App;
