import { serverSearch } from '@/config/config.index'
var userInput = "";

const options = {
method: 'GET',
headers: {
    'X-RapidAPI-Key': `${process.env.APIKey}`,
    'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
  }
};

export async function searchMovies(searchTerm: string) {
    userInput = searchTerm;
    var searchPrompt = userInput.replace(/ /g,"%20"); //Replace the spaces with %20 for the API search to work
    const response = await fetch(`${serverSearch}${searchPrompt}`, options);
    const data = await response.json();
    const movies = data;

    return {
        props: { movies }
    }
}