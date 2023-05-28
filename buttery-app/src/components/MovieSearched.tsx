import { Box, Container, Flex, HStack } from '@chakra-ui/react'
import React from 'react'
import AddBookmark from './AddBookmark'
import MovieCard from './MovieCard'

type Props = {}

const MovieSearched = ({movies} : any) => {
  const [favorites, setFavorites]: any = React.useState([]);
  const addFavoriteMovie = (movie: any) =>{
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  }
  
  return (
    <div className='h-100% flex flex-row gap-10 overflow-x-auto no-scrollbar'>
        {movies?.map((movie: any) => (
          <div key={movie.imdbID}>
            <MovieCard className='p-10' movie={movie}  key={movie.imdbID} handleFavoritesClick={addFavoriteMovie} favoriteComponent={AddBookmark}/>
          </div>
        ))}
    </div>
  )
}

export default MovieSearched