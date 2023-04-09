import Navbar from '@/components/Navbar'
import { server, serverSearch } from '@/config/config.index';
import React from 'react'

type Props = {}

const movies = (props: Props) => {
  return (
    <>
    
      <Navbar/>
      <div>Movies</div>
    </>
  )
}
export default movies