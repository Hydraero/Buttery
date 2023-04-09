import React from 'react'

type Props = {}

const MovieCard = ({movie} : any) => {
  return (
    <div>{movie.Title}</div>
  )
}

export default MovieCard