import { useGetDiscover } from "@/shared/api/queries/use-get-discover";
import { BasePage } from "@/shared/ui/base-page";

export const DiscoverPage = () => {
    const { data, isPending } = useGetDiscover();

    return <BasePage>Discover {isPending ? "loading" : `loaded ${data?.length}`}</BasePage>;
};
