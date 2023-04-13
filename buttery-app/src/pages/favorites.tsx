import React from 'react'
import Navbar from '@/components/Navbar'
import { server, serverSearch } from '@/config/config.index';

type Props = {}

const favorites = (props: Props) => {
  return (
    <>  
        <Navbar/>
        <div>favorites</div>
    </>
  )
}

export default favorites