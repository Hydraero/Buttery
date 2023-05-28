import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { serverSearch } from '@/config/config.index'
import MovieSearched from '@/components/MovieSearched'
import React from 'react'

export default function Home() {
  return (
    <div className="">
      <div>
        <Navbar />
      </div>
      <main className='text-xl bg-rose-600 h-screen'>
        <Hero />
      </main>
    </div>
  )
}