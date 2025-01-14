import { useGetTrendingMovies } from "@/shared/api/queries/use-get-trending-movies";
import { BasePage } from "@/shared/ui/base-page";
import { DetailsModal } from "@/widgets/details-modal";
import { MovieCard } from "@/widgets/movie-card";
import { MovieCardSkeleton } from "@/widgets/movie-card/styled";
import { MovieCards } from "@/widgets/movie-cards/styled";
import { Portal } from "@/widgets/portal";
import { Section } from "@/widgets/section";

export const MoviesPage = () => {
    const { data: trendingToday, isPending: trendingTodayPending } = useGetTrendingMovies("day");
    const { data: trendingThisWeek, isPending: trendingThisWeekPending } =
        useGetTrendingMovies("week");

    return (
        <BasePage>
            <Portal>
                <DetailsModal />
            </Portal>
            <Section title="Trending Movies Today">
                <MovieCards>
                    {(trendingTodayPending || !trendingToday) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {trendingToday &&
                        trendingToday?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </MovieCards>
            </Section>
            <Section title="Trending Movies This Week">
                <MovieCards>
                    {(trendingThisWeekPending || !trendingThisWeek) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {trendingThisWeek &&
                        trendingThisWeek
                            ?.reverse()
                            ?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
