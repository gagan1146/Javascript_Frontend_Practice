import React from 'react'

const Card = ({movieData}) => {
    const {Poster, imdbID} = movieData;
  return (
    <li className="hero-container">
      <div className="main-container">
        <div className="poster-container">
          <img src={Poster} className="poster" alt={`Poster of ${imdbID}`} />
        </div>
        <div className="ticket-container">
          <div className="ticket_content">
            <a href={`/movie/${imdbID}`}>
              <button className="ticket_buy-btn">Watch now</button>
            </a>
          </div>
        </div>
      </div>
    </li>
  )
}

export default Card
