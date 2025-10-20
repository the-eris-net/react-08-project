import { useState, useEffect, useRef, use } from 'react';
import movieListData from '@/mocks/movieListData';
import styles from '@/pages/App/App.module.css';
import SpreadMovies from './SpreadMovies';
import Button from '@/components/Button';
import SwiperMovies from './SwiperMovies';
import TMDB from '@/config/tmdb';
import { useFetchContinue } from '@/hooks';
import { useSearchParams } from 'react-router-dom';
import { useSupabaseAuth } from '@/supabase';
import { useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';

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
  return (
    `${TMDB.BASE_URL}/${TMDB.SEARCH_PATH}` +
    `?query=${encodeURIComponent(query)}` +
    `&language=ko-KR&page=${page}`
  );
}

function App() {
  const [isSwiper, setIsSwiper] = useState(false);
  const [keyword] = useSearchParams();
  const { getUserInfo } = useSupabaseAuth();
  const { registUserInfo } = useContext(AuthContext);
  /* 맨 처음 로딩시 keyword 안붙을 수도 있기 대문에 추가함 */
  const query = keyword.get('keyword')?.trim();
  const loader = useRef(null);
  const [page, setPage] = useState(1);
  const scrollPos = useRef(0);

  useEffect(() => {
    getUserInfo().then((userInfo) => {
      registUserInfo(userInfo);
    });
  }, []);

  const headers = {
    Authorization: `Bearer ${TMDB.API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  };

  const url = getSearchUrl(query, page);

  const [data, isLoading] = useFetchContinue(url, headers, page);

  const movies = data
    ? data.results.filter((movie) => movie.adult === false)
    : [];

  useEffect(() => {
    const observer = new IntersectionObserver(
      async (entries) => {
        const target = entries[0];
        if (target.isIntersecting) {
          scrollPos.current = window.scrollY;
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 } // 완전히 보일 때 트리거
    );

    observer.observe(loader.current);
    return () => observer.disconnect();
  }, []);

  /*스크롤 유지 */
  useEffect(() => {
    window.scrollTo({ top: scrollPos.current });
  }, [data]);

  return (
    <div>
      <Button onClick={() => setIsSwiper(!isSwiper)} className={styles.button}>
        {isSwiper ? '기본 목록 보기' : 'Swiper로 보기'}
      </Button>
      <div className={styles.movies}>
        <Movies movies={movies} isSwiper={isSwiper} isLoading={isLoading} />
      </div>
      {/* 무한스크롤용 관찰 div, 맨 첫번째에 바로 실행안하게 데이터 가져오고 실행하게 변경 */}
      <div ref={loader} style={{ display: data.results.length === 0 ? 'none' : 'block' }} />
    </div>
  );
}

export default App;
