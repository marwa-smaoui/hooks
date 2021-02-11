import React, { useState } from 'react';
import { starTab } from '../Assets/Data';
import { movieslist } from '../Assets/Data';
import MovieCard from './MovieCard';
import {Form} from'react-bootstrap';
import '../App.css';


const MovieList = ({movielist}) => {

    const [search, setSearch] = useState('')
    const handlesearch = (e) => {
        setSearch(e.target.value)
    }
    const [starList, setStarList] = useState(starTab)
    const changeColor=(id)=> {
        setStarList(starList.map(el=>el.id===id?{icon:el.icon,
            isColored:!el.isColored,id:el.id} :el))
    }
    return (
        <div>
            <div className="d-flex justify-content-around mt-3">
            <Form.Control type="text" placeholder="enter a film " className="col-md-7" onChange={handlesearch} />
             <div>
                 {starList.map(el=><span className={el.isColored ? 'colored':'star'} key={el.id} onClick={()=>changeColor(el.id)}>{el.icon}</span>)}
             </div>
            </div>
        <div className='row'>
          {movielist.filter(movie=>movie.title.toUpperCase().includes(search.toUpperCase()))
          .filter(movie=>movie.rate >= starList.filter(el=>el.isColored===true).length)
          .map((movie,index)=> <MovieCard movie={movie} key={index} />)}  
        </div>
        </div>
    )
}

export default MovieList
