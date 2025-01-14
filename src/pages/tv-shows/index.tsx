import { Section } from "../../widgets/section";
import { useGetTrendingShows } from "@/shared/api/queries/use-get-trending-shows";
import { BasePage } from "@/widgets/base-page";
import { DetailsModal } from "@/widgets/details-modal";
import { MovieCard } from "@/widgets/movie-card";
import { MovieCardSkeleton } from "@/widgets/movie-card/styled";
import { MovieCards } from "@/widgets/movie-cards/styled";
import { Portal } from "@/widgets/portal";

export const TvShowsPage = () => {
    const { data: trendingToday, isPending: trendingTodayPending } = useGetTrendingShows("day");
    const { data: trendingThisWeek, isPending: trendingThisWeekPending } =
        useGetTrendingShows("week");

    return (
        <BasePage>
            <Portal>
                <DetailsModal />
            </Portal>
            <Section title="Trending Tv Shows Today">
                <MovieCards>
                    {(trendingTodayPending || !trendingToday) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {trendingToday &&
                        trendingToday?.map(show => <MovieCard movie={show} key={show.id} />)}
                </MovieCards>
            </Section>
            <Section title="Trending Tv Shows This Week">
                <MovieCards>
                    {(trendingThisWeekPending || !trendingThisWeek) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {trendingThisWeek &&
                        trendingThisWeek
                            ?.reverse()
                            ?.map(show => <MovieCard movie={show} key={show.id} />)}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
