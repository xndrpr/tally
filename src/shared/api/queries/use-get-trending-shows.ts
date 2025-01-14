import { api } from "..";
import { Movie } from "../types/movie";
import { QueryOptions, useQuery } from "@tanstack/react-query";

const QUERY_KEY = "getTrendingShows";

const fetchData = async (): Promise<Movie[]> => {
    await new Promise(resolve => setTimeout(resolve, 2 * 1000));

    const response = await api.get("/trending/tv/day?language=en-US");

    if (response.status === 200) {
        const shows = response.data.results as TvShow[];

        return shows.map(show => ({
            ...show,
            title: show.name,
            release_date: show.first_air_date,
            original_title: show.original_name,
            video: false,
        }));
    } else {
        throw new Error("Failed to fetch data");
    }
};

export const useGetTrendingShows = (queryOptions?: QueryOptions<Movie[]>) =>
    useQuery({
        queryKey: [QUERY_KEY],
        queryFn: async () => await fetchData(),
        ...queryOptions,
    });
