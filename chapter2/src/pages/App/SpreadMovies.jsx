import MovieCard from '@/components/MovieCard';

export default function SpreadMovies({movies}) {
    return (
        <>
            {movies.map(movie=><MovieCard key={movie.id} movie={movie}/>)}
        </>
    );
}
