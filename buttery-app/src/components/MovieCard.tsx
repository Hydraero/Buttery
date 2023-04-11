import React from 'react'
import Image from 'next/image'

type Props = {}

const MovieCard = ({movie} : any) => {
  return (
    <>
        <div>
          {movie.Title}
          <img src={`${movie.Poster}`} alt={'Movie Poster Image'} width={500} height={741}/>
        </div>
    </>
    )
}

export default MovieCard