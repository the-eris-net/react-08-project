import { useState } from 'react';
import movieListData from '@/mocks/movieListData';
import styles from '@/pages/App/App.module.css';
import SpreadMovies from './SpreadMovies';
import Button from '@/components/Button';
import SwiperMovies from './SwiperMovies';

function Movies({ movies, isSwiper }) {
  if (isSwiper) {
    return <SwiperMovies movies={movies} />;
  }

  return <SpreadMovies movies={movies} />;
}

function App() {
  const [movies, setMovies] = useState(movieListData.results);
  const [isSwiper, setIsSwiper] = useState(false);

  return (
    <div>
      <Button onClick={() => setIsSwiper(!isSwiper)} className={styles.button}>
        {isSwiper ? '기본 목록 보기' : 'Swiper로 보기'}
      </Button>
      <div className={styles.movies}>
        <Movies movies={movies} isSwiper={isSwiper} />
      </div>
    </div>
  );
}

export default App;
