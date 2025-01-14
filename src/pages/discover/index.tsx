import { Section } from "./ui/section";
import { useGetDiscover } from "@/shared/api/queries/use-get-discover";
import { BasePage } from "@/shared/ui/base-page";
import { MovieCard } from "@/widgets/movie-card";
import { MovieCardSkeleton } from "@/widgets/movie-card/styled";
import { MovieCards } from "@/widgets/movie-cards/styled";

export const DiscoverPage = () => {
    const { data, isPending } = useGetDiscover();

    return (
        <BasePage>
            <Section title="Trending">
                <MovieCards>
                    {(isPending || !data) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {data && data?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </MovieCards>
            </Section>
            <Section title="Best of all time">
                <MovieCards>
                    {(isPending || !data) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {data && data?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </MovieCards>
            </Section>
            <Section title="Something else">
                <MovieCards>
                    {(isPending || !data) &&
                        new Array(10).fill(0).map((_, index) => <MovieCardSkeleton key={index} />)}
                    {data && data?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
