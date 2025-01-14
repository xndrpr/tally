import { Section } from "../../widgets/section";
import { useGetTrendingShows } from "@/shared/api/queries/use-get-trending-shows";
import { BasePage } from "@/shared/ui/base-page";
import { MovieCard } from "@/widgets/movie-card";
import { MovieCardSkeleton } from "@/widgets/movie-card/styled";
import { MovieCards } from "@/widgets/movie-cards/styled";

export const TvShowsPage = () => {
    const { data: trendingToday, isPending: trendingTodayPending } = useGetTrendingShows();

    return (
        <BasePage>
            <Section title="Trending Tv Shows Today">
                <MovieCards>
                    {(trendingTodayPending || !trendingToday) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {trendingToday &&
                        trendingToday?.map(show => <MovieCard movie={show} key={show.id} />)}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
