import { Input } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import Search from './Search'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
        <Link href="/movies">
            <button>
                Goto Movies
            </button>
        </Link>
        <Search/>
    </div>
  )
}

export default Hero