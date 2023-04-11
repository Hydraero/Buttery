import React from 'react'
import MovieCard from './MovieCard'

type Props = {}

const MovieSearched = ({movies} : any) => {
  return (
    <div>
        {movies?.map((movie: any) => <MovieCard movie={movie} key={movie.imdbID}/>)}
    </div>
  )
}

export default MovieSearched