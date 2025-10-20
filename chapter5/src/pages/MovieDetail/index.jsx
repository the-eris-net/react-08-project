import movieDetailData from '@/mocks/movieDetailData';
import styles from './MovieDetail.module.css';
import { useLocation } from 'react-router-dom';
import TMDB from '@/config/tmdb';
import { useFetch } from '@/hooks';
import Indicator from '@/components/Indicator';
import { BookMarkContext } from '@/contexts/BookMarkContext';
import { useContext } from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Genre({value}){
    return <span className={styles.genre}>{value}</span>
}

/*chapter2에서 제일 마지막에 수정 */
export default function MovieDetail() {
  const { bookMarks, toggleBookMark } = useContext(BookMarkContext);

  const movieId = useLocation().state.movieId;
  const headers = {
    Authorization: `Bearer ${TMDB.API_KEY}`,
    'Content-Type': 'application/json;charset=utf-8',
  };
  const [data, isLoading] = useFetch(
    `${TMDB.BASE_URL}/${TMDB.DETAIL_PATH}/${movieId}?&language=ko-KR`,
    headers,
    0
  );

  const isBookMarked = bookMarks[movieId] !== undefined;

  if (isLoading || !data) {
    return <Indicator />;
    // return <div>Loading...</div>;
  }

  return (
    <div className={styles.movie}>
      <div className={styles.poster} >
        <img className={styles.img} src={`${BASE_URL}${data.poster_path}`}></img>
        <div className={styles.star} style={{
          backgroundColor: isBookMarked ? 'red' : 'white'
        }} onClick={() => toggleBookMark(data)}>
        </div>
      </div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.vote}>{data.vote_average}</div>
      <div className={styles.genres}>{data.genres.map(genre=><Genre key={genre.id} value={genre.name}/>)}</div>
      <div className={styles.overview}>{data.overview}</div>
    </div>
  );
}
