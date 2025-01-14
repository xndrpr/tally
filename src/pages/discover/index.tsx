import { MovieCard, MovieCards, MovieTitle } from "./styled";
import { Section } from "./ui/section";
import { useGetDiscover } from "@/shared/api/queries/use-get-discover";
import { BasePage } from "@/shared/ui/base-page";

export const DiscoverPage = () => {
    const { data, isPending } = useGetDiscover();

    if (isPending) return <BasePage>Loading...</BasePage>;

    return (
        <BasePage>
            <Section title="Trending">
                <MovieCards>
                    {data?.map(movie => (
                        <MovieCard key={movie.id} $image={"/mock-image.png"}>
                            <MovieTitle>{movie.title}</MovieTitle>
                        </MovieCard>
                    ))}
                </MovieCards>
            </Section>
        </BasePage>
    );
};
