import { Input } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Search from './Search'

type Props = {}

const Hero = (props: Props) => {
  const [favorites, setFavorites]: any = React.useState([]);
  const addFavoriteMovie = (movie: any) =>{
    const newFavoriteList = [...favorites, movie];
    setFavorites(newFavoriteList);
  }

  return (
    <div className='pt-32 hero'>
        {/*
        <Link href="/movies">
            <button>
                Goto Movies
            </button>
        </Link>
        */}
        <Search/>
    </div>
  )
}

export default Hero