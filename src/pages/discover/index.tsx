import { MovieCard, MovieCards, MovieCardSkeleton, MovieTitle } from "./styled";
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
                            <MovieCard key={movie.id} $image={"/mock-image.png"}>
                                <MovieTitle>{movie.title}</MovieTitle>
                            </MovieCard>
                        ))}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
