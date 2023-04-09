import Link from 'next/link'
import React from 'react'

type Props = {}

const Hero = (props: Props) => {
  return (
    <div>
        <h1>Hero</h1>
        <Link href="/movies">
            <button>
                Goto Movies
            </button>
        </Link>
    </div>
  )
}

export default Hero