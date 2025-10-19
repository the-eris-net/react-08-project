import { useState, useEffect } from 'react';
import movieListData from '@/mocks/movieListData';
import styles from '@/pages/App/App.module.css';
import SpreadMovies from './SpreadMovies';
import Button from '@/components/Button';
import SwiperMovies from './SwiperMovies';
import TMDB from '@/config/tmdb';
import { useFetch } from '@/hooks';

function Movies({ movies, isSwiper, isLoading }) {
  return isSwiper ? (
    <SwiperMovies movies={movies} />
  ) : (
    <SpreadMovies movies={movies} isLoading={isLoading} />
  );
}

/**
 * 주석 친버전으로 먼저 해야함
 * 1번 -> 2번 순서로 한다음에 3번 순서로 수정
 */
function App() {
  // 1번
  // const [data, setData] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  const [isSwiper, setIsSwiper] = useState(false);
  const headers = {
    Authorization: `Bearer ${TMDB.API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  };
  /* 3번 start */
  const [data, isLoading] = useFetch(
    `${TMDB.BASE_URL}/${TMDB.POPULAR_PATH}?&language=ko-KR&page=1`,
    headers
  );
  /* 3번 end */

  // 2번
  // useEffect(() => {
  //   setIsLoading(true);
  //   fetch(`${TMDB.BASE_URL}/${TMDB.POPULAR_PATH}?&language=ko-KR&page=4`, {
  //     headers,
  //   })
  //     .then((response) => response.json())
  //     .then((data) => setData(data))
  //     .finally(() => {
  //       //setTimeout은 debugging 용도
  //       setTimeout(() => {
  //         setIsLoading(false);
  //       }, 2000);
  //     });
  // }, []);

  const movies = data ? data.results.filter((movie) => movie.adult === false) : [];

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
