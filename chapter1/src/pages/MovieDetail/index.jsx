import { useState } from 'react';
import movieDetailData from '@/mocks/movieDetailData';
import styles from '@/pages/MovieDetail/MovieDetail.module.css';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function Genre({value}){
    return <span className={styles.genre}>{value}</span>
}

export default function MovieDetail() {
  const [data, setData] = useState(movieDetailData);

  return (
    <div className={styles.movie}>
      <div className={styles.poster} >
        <img className={styles.img} src={`${BASE_URL}${data.poster_path}`}></img>
      </div>
      <div className={styles.title}>{data.title}</div>
      <div className={styles.vote}>{data.vote_average}</div>
      <div className={styles.genres}>{data.genres.map(genre=><Genre key={genre.id} value={genre.name}/>)}</div>
      <div className={styles.overview}>{data.overview}</div>
    </div>
  );
}
