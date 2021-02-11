import React, { useState } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import AddMovie from './Components/AddMovie';
import { movieslist } from './Assets/Data';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  const [movielist, setMovielist] = useState(movieslist)
  const addMovie = (title,posterURL,description,rate) =>  {
    setMovielist([...movielist,{title:title ,posterURL:posterURL ,description:description ,rate:rate}])
  }
  return (
    <div className="container-fluid">
     <MovieList movielist={movielist} />
     <AddMovie addMovie={addMovie}/>
    </div>
  );
}

export default App;
