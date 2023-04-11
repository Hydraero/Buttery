import { Button, Input } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import MovieSearched from './MovieSearched';

import { serverSearch } from '@/config/config.index'

const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': `${process.env.APIKey}`,
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

type Props = {}

const Search = (props: Props) => {
    const [searchTerm, setSearchTerm] = React.useState("");
    //const [isLoaded, setIsLoaded] = React.useState(false);
    const [movieItems, setMovieItems] = React.useState([]);
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value);
    async function searchMovies() {
        var searchPrompt = searchTerm.replace(/ /g,"%20"); //Replace the spaces with %20 for the API search to work
        const response = await fetch(`${serverSearch}${searchPrompt}`, options);
        const data = await response.json();
        const movies = data.Search;
        setMovieItems(movies);
    }

    useEffect(()=>{
        searchMovies()
    }, [searchTerm])

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => 
    {
        event.preventDefault();
        searchMovies();
        console.log(searchTerm);
        console.log(movieItems);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Input type='text' placeholder='Search for a Movie' size='lg' value={searchTerm} onChange={handleSearch}/>
                <Button type="submit">Search</Button>
                Searched Term: "{searchTerm}"
            </form>
            <h2>List of Movies:</h2>
            <MovieSearched movies={movieItems}/>
        </div>
    )
}

export default Search