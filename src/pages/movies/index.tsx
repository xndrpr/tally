import { useGetTrendingMovies } from "@/shared/api/queries/use-get-trending-movies";
import { BasePage } from "@/shared/ui/base-page";
import { MovieCard } from "@/widgets/movie-card";
import { MovieCardSkeleton } from "@/widgets/movie-card/styled";
import { MovieCards } from "@/widgets/movie-cards/styled";
import { Section } from "@/widgets/section";

export const MoviesPage = () => {
    const { data: trendingToday, isPending: trendingTodayPending } = useGetTrendingMovies();

    return (
        <BasePage>
            <Section title="Trending Movies Today">
                <MovieCards>
                    {(trendingTodayPending || !trendingToday) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {trendingToday &&
                        trendingToday?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
