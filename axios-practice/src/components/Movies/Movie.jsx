import React, { useEffect, useState } from 'react'
import './Movie.css'
import axios from 'axios';
import Card from '../Card/Card.jsx';

const Movie =  () => {
    const [data, setData] = useState([]);
    const API = "https://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1";
    const fetchData = async () => {
        const res = await axios.get(API);
        setData(res.data.Search);
    }
    useEffect(() => {
        fetchData();
    }, []);
  return (
    <div className="movie">
        {
            data.map((movie)=>{
              return (
                <Card key = {movie.imdbID} movieData={movie} />
              )
            })
        }
    </div>
  )
}

export default Movie