import styles from '@/components/MovieCard/MovieCard.module.css'

const BASE_URL = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({movie}){
    console.log(movie);
    return <div>
        <img src={`${BASE_URL}${movie.backdrop_path}`}/>
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.voteCount}>{movie.vote_count}</div>
    </div>
}