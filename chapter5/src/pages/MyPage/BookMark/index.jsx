import styles from './BookMark.module.css';
import { useContext } from 'react';
import { BookMarkContext } from '@/contexts/BookMarkContext';
import MovieCard from '@/components/MovieCard';

export default function BookMark() {
  const { bookMarks } = useContext(BookMarkContext);

  return (
    <div className={styles.bookMark}>
      <div className={styles.title}>BookMark</div>
      <div className={styles.list}>
        {Object.values(bookMarks).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
