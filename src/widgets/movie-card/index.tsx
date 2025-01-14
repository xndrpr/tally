import { MovieCardSC, MovieRating, MovieTitle, MovieYear } from "./styled";
import { Movie } from "@/shared/api/types/movie";

export const MovieCard = ({ movie }: { movie: Movie }) => {
    return (
        <MovieCardSC key={movie.id} $image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}>
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieYear>{movie.release_date.split("-")[0] || new Date().getFullYear()}</MovieYear>
            <MovieRating $percent={movie.vote_average * 10}>
                {Math.trunc(movie.vote_average * 10)}%
            </MovieRating>
        </MovieCardSC>
    );
};
