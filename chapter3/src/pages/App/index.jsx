import { useState, useEffect } from 'react';
import movieListData from '@/mocks/movieListData';
import styles from '@/pages/App/App.module.css';
import SpreadMovies from './SpreadMovies';
import Button from '@/components/Button';
import SwiperMovies from './SwiperMovies';
import TMDB from '@/config/tmdb';
import { useFetch } from '@/hooks';
import { useSearchParams } from 'react-router-dom';

function Movies({ movies, isSwiper, isLoading }) {
  return isSwiper ? (
    <SwiperMovies movies={movies} />
  ) : (
    <SpreadMovies movies={movies} isLoading={isLoading} />
  );
}
/* 요청시 쿼리파메터에 include_adult=false로 성인 영화 제거 가능 */
function getSearchUrl(query, page = 1) {
  if (query === '') {
    return `${TMDB.BASE_URL}/${TMDB.POPULAR_PATH}?&language=ko-KR&page=${page}`;
  }
  return `${TMDB.BASE_URL}/${TMDB.SEARCH_PATH}` +
        `?query=${encodeURIComponent(query)}` +
        `&language=ko-KR&page=${page}`;
}

function App() {
  const [isSwiper, setIsSwiper] = useState(false);
  const [keyword] = useSearchParams();
  /* 맨 처음 로딩시 keyword 안붙을 수도 있기 대문에 추가함 */
  const query = keyword.get('keyword')?.trim();

  const headers = {
    Authorization: `Bearer ${TMDB.API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  };

  const url = getSearchUrl(query);

  const [data, isLoading] = useFetch(url, headers);

  const movies = data
    ? data.results.filter((movie) => movie.adult === false)
    : [];

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
