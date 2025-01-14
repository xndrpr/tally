import { api } from "..";
import { QueryOptions, useQuery } from "@tanstack/react-query";
import { Movie } from "@api/types/movie";

const QUERY_KEY = "getTest";

const getDiscover = async (): Promise<Movie[]> => {
    await new Promise(resolve => setTimeout(resolve, 2 * 1000));

    const response = await api.get("/trending/movie/day?language=en-US");

    if (response.status === 200) {
        return response.data.results as Movie[];
    } else {
        throw new Error("Failed to fetch data");
    }
};

export const useGetDiscover = (queryOptions?: QueryOptions<Movie[]>) =>
    useQuery({
        queryKey: [QUERY_KEY],
        queryFn: async () => await getDiscover(),
        ...queryOptions,
    });
