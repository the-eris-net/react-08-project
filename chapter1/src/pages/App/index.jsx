import { useState } from 'react'
import movieListData from '@/mocks/movieListData'
import MovieCard from '@/components/MovieCard';
import styles from '@/pages/App/App.module.css'

function App() {
  const [movies, setMovies] = useState(movieListData.results);

  return (
    <div className={styles.app}>
      {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
    </div>
  )
}

export default App
