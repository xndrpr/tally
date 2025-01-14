import {
    MovieCard,
    MovieCards,
    MovieCardSkeleton,
    MovieRating,
    MovieTitle,
    MovieYear,
} from "./styled";
import { Section } from "./ui/section";
import { useGetDiscover } from "@/shared/api/queries/use-get-discover";
import { BasePage } from "@/shared/ui/base-page";

export const DiscoverPage = () => {
    const { data, isPending } = useGetDiscover();

    return (
        <BasePage>
            <Section title="Trending">
                <MovieCards>
                    {(isPending || !data) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {data &&
                        data?.map(movie => (
                            <MovieCard
                                key={movie.id}
                                $image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            >
                                <MovieTitle>{movie.title}</MovieTitle>
                                <MovieYear>
                                    {movie.release_date.split("-")[0] || new Date().getFullYear()}
                                </MovieYear>
                                <MovieRating $percent={movie.vote_average * 10}>
                                    {Math.trunc(movie.vote_average * 10)}%
                                </MovieRating>
                            </MovieCard>
                        ))}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
