import { Section } from "./ui/section";
import { useGetTrendingMovies } from "@/shared/api/queries/use-get-trending-movies";
import { useGetTrendingShows } from "@/shared/api/queries/use-get-trending-shows";
import { BasePage } from "@/shared/ui/base-page";
import { MovieCard } from "@/widgets/movie-card";
import { MovieCardSkeleton } from "@/widgets/movie-card/styled";
import { MovieCards } from "@/widgets/movie-cards/styled";

export const DiscoverPage = () => {
    const { data: trendingMovies, isPending: trendingMoviesPending } = useGetTrendingMovies();
    const { data: trendingShows, isPending: trendingShowsPending } = useGetTrendingShows();

    return (
        <BasePage>
            <Section title="Trending Movies">
                <MovieCards>
                    {(trendingMoviesPending || !trendingMovies) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {trendingMovies &&
                        trendingMovies?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </MovieCards>
            </Section>
            <Section title="Trending TV Shows">
                <MovieCards>
                    {(trendingShowsPending || !trendingShows) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {trendingShows &&
                        trendingShows?.map(show => <MovieCard movie={show} key={show.id} />)}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
