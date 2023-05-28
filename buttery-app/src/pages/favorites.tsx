import React from 'react'
import Navbar from '@/components/Navbar'
import { server, serverSearch } from '@/config/config.index';
import MovieSearched from '@/components/MovieSearched';

type Props = {}

const favorites = (props: Props) => {

  return (
    <>  
        <Navbar/>
        <div>favorites</div>
        <MovieSearched/>
    </>
  )
}

export default favorites