import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import { serverSearch } from '@/config/config.index'
import MovieSearched from '@/components/MovieSearched'


export default function Home(/*{movies} : {movies:any}*/) {
  /*console.log(movies);*/

  return (
    <div className="bg-slate-100 dark:bg-slate-900 w-full overflow-hidden App">
      <div>
        <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
      <main className='text-xl'>
        <div>
          {/*
          <h2>List of Movies:</h2>
          <MovieSearched movies={movies.Search}/>
          */}
        </div>

        
      </main>
    </div>
  )
}
/*
var userInput = "Godfather Part";
var searchPrompt = userInput.replace(/ /g,"%20");

const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': `${process.env.APIKey}`,
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};
export async function getStaticProps() {
  
  const response = await fetch(`${serverSearch}${searchPrompt}`, options);
  const data = await response.json();
  const movies = data;

  return {
    props: { movies }
  }
}
*/
