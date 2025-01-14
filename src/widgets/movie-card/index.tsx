import { MovieCardSC, MovieRating, MovieTitle, MovieYear } from "./styled";
import { useAtom } from "jotai";
import { Movie } from "@/shared/api/types/movie";
import { currentMovieAtom } from "@/shared/atoms/current-movie.atom";

export const MovieCard = ({ movie }: { movie: Movie }) => {
    const [currentMovie, setCurrentMovie] = useAtom(currentMovieAtom);

    return (
        <MovieCardSC
            key={movie.id}
            $image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            onClick={() => !currentMovie && setCurrentMovie(movie)}
        >
            <MovieTitle>{movie.title}</MovieTitle>
            <MovieYear>{movie.release_date.split("-")[0] || new Date().getFullYear()}</MovieYear>
            <MovieRating $percent={movie.vote_average * 10}>
                {Math.trunc(movie.vote_average * 10)}%
            </MovieRating>
        </MovieCardSC>
    );
};
