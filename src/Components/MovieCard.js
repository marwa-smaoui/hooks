import React from 'react';
import {Card} from'react-bootstrap';

const MovieCard = ({movie}) => {
    return (
        <div className='col-md-4 mt-3'>
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterURL} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
     <Card.Text>
         {movie.description}
     </Card.Text>
     <p className='gold'>{''.padStart(movie.rate,'★')}</p>
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
