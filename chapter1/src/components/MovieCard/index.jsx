import styles from '@/components/MovieCard/MovieCard.module.css'
import { useNavigate } from 'react-router-dom'

const BASE_URL = 'https://image.tmdb.org/t/p/w500'

export default function MovieCard({movie}){
    const navigate = useNavigate();

    const hanleOnClick = (_)=>{
        navigate('/details')
    }

    return <div className={styles.card} onClick={hanleOnClick} >
        <img className={styles.img} src={`${BASE_URL}${movie.poster_path}`} />
        <div className={styles.title}>{movie.title}</div>
        <div className={styles.voteCount}>평점 : {movie.vote_average}</div>
    </div>
}