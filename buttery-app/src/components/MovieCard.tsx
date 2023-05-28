import React from 'react'
import Image from 'next/image'
import { Card, CardHeader, Container } from '@chakra-ui/react'
import { BsBookmark } from 'react-icons/bs'
import { MdFavorite, MdFavoriteBorder } from 'react-icons/md'

type Props = {}

const MovieCard = (props: any) => {
  const FavoriteComponent = props.favoriteComponent;

  return (
    <Card className='card-container w-96 transition duration-500 hover:scale-105 hover:shadow-lg hover:shadow-yellow-300/80 poster-container'>
      <img src={`${props.movie.Poster}`} alt={`${props.movie.Title} Poster Image`} className='w-full' />
      <div className='overlay absolute w-full h-full transition duration-500 ease-in-out opacity-0 bottom-0 p-10 bg-black/80 hover:opacity-100'>
        <h1 className='text-yellow-200 text-center body-font font-poppins'>
          {props.movie.Title}
        </h1>

        <FavoriteComponent></FavoriteComponent>
      </div>
    </Card>
  )
}

export default MovieCard