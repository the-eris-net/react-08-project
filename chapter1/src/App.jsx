import { useState } from 'react'
import movieListData from '@/mocks/movieListData'
import MovieCard from './components/MovieCard';

function App() {
  const [movies, setMovies] = useState(movieListData.results);
  console.log(movieListData.results);

  return (
    <>
      {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
    </>
  )
}

export default App
