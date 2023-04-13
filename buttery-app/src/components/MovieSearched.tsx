import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import MovieCard from './MovieCard'

type Props = {}

const MovieSearched = ({movies} : any) => {
  return (
    <div className='h-100% flex flex-row gap-10 overflow-x-auto no-scrollbar'>
        {movies?.map((movie: any) => (
          <div className='p-10'>
            <MovieCard className='' movie={movie} key={movie.imdbID}/>
          </div>
        ))}
    </div>
  )
}

export default MovieSearched