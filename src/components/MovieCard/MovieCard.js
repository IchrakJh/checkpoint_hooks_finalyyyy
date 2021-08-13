import React from 'react'
import {Card} from "react-bootstrap"
import {RatingView } from 'react-simple-star-rating'

const MovieCard = ({movie}) => {
    return (
        <Card style={{width:"22.5%", marginLeft:"1rem"}}>
            <Card.Img variant="top" src={movie.poster} />
            <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <RatingView ratingValue={movie.rating}/>
            </Card.Body>
        </Card>
        
    )
}

export default MovieCard
