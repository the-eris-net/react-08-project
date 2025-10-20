import MovieCard from '@/components/MovieCard';

export default function SpreadMovies({ movies, isLoading }) {
  const resultMovies = movies.length === 0
    // ? Array.from({ length: 12 }, (_, index) => ({ id: index }))
    ? [...Array(10)].map((_, index) => ({ id: index }))
    : movies;

  return (
    <>
      {resultMovies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} isLoading={isLoading} />
      ))}
    </>
  );
}
