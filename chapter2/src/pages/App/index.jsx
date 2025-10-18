import { useEffect, useState } from 'react';
import movieListData from '@/mocks/movieListData';
import styles from '@/pages/App/App.module.css';
import SpreadMovies from './SpreadMovies';
import Button from '@/components/Button';
import SwiperMovies from './SwiperMovies';
import TBDB from '@/config/tmdb';

function Movies({ movies, isSwiper }) {
  return isSwiper ? (
    <SwiperMovies movies={movies} />
  ) : (
    <SpreadMovies movies={movies} />
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [isSwiper, setIsSwiper] = useState(false);
  const headers = {
    Authorization: `Bearer ${TBDB.API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  };

  useEffect(() => {
    fetch(`${TBDB.BASE_URL}/${TBDB.POPULAR_PATH}?&language=ko-KR&page=4`, {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results.filter((movie) => movie.adult === false));
      });
  }, []);

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
