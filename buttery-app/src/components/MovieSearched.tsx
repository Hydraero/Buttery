import React from 'react'
import MovieCard from './MovieCard'

type Props = {}

const MovieSearched = ({movies} : any) => {
  return (
    <div className='my-10 flex flex-row space-x-5 justify-center items-center'>
        {movies?.map((movie: any) => <MovieCard movie={movie} key={movie.imdbID}/>)}
    </div>
  )
}

export default MovieSearched