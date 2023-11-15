import MovieCard from "./MovieCard";

export default function MovieGrid({movies, handleMovieClick}){
    if (!movies.length) return null;
    return (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-5">
            {
                movies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
                ))
            }
        </div>
    )
}