import { useEffect, useState } from 'react';
import movieListData from '@/mocks/movieListData';
import styles from '@/pages/App/App.module.css';
import SpreadMovies from './SpreadMovies';
import Button from '@/components/Button';
import SwiperMovies from './SwiperMovies';
import TBDB from '@/config/tmdb';

function Movies({ movies, isSwiper, isLoading }) {
  return isSwiper ? (
    <SwiperMovies movies={movies} />
  ) : (
    <SpreadMovies movies={movies} isLoading={isLoading} />
  );
}

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSwiper, setIsSwiper] = useState(false);
  const headers = {
    Authorization: `Bearer ${TBDB.API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  };

  useEffect(() => {
    setIsLoading(true);
    fetch(`${TBDB.BASE_URL}/${TBDB.POPULAR_PATH}?&language=ko-KR&page=4`, {
      headers,
    })
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.filter((movie) => movie.adult === false));
      })
      .finally(() => {
        //setTimeout은 debugging 용도
        setTimeout(() => {
          setIsLoading(false);
        }, 10000);
      });
  }, []);

  return (
    <div>
      <Button onClick={() => setIsSwiper(!isSwiper)} className={styles.button}>
        {isSwiper ? '기본 목록 보기' : 'Swiper로 보기'}
      </Button>
      <div className={styles.movies}>
        <Movies movies={movies} isSwiper={isSwiper} isLoading={isLoading} />
      </div>
    </div>
  );
}

export default App;
