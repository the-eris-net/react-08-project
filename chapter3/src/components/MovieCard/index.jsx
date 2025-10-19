import styles from '@/components/MovieCard/MovieCard.module.css';
import { useNavigate } from 'react-router-dom';
import Skeleton from '../Skeleton';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCardBody({ movie, isLoading }) {
  if (isLoading) {
    return <Skeleton width="100%" height="300px" />;
  }

  return (
    <>
      <img className={styles.img} src={`${BASE_URL}${movie.poster_path}`} />
      <div className={styles.title}>{movie.title}</div>
      <div className={styles.voteCount}>평점 : {movie.vote_average}</div>
    </>
  );
}

export default function MovieCard({ movie, isLoading }) {
  const navigate = useNavigate();

  const handleOnClick = (_) => {
    navigate('/details', { state: { movieId: movie.id } });
  };

  return (
    <div className={styles.card} onClick={handleOnClick}>
      <MovieCardBody movie={movie} isLoading={isLoading} />
    </div>
  );
}
