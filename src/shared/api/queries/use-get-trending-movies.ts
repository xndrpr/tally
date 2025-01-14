import { api } from "..";
import { TrendingType } from "../types/trending-type";
import { QueryOptions, useQuery } from "@tanstack/react-query";
import { Movie } from "@api/types/movie";

const QUERY_KEY = "getTrendingMovies";

const fetchData = async (type: TrendingType): Promise<Movie[]> => {
    const response = await api.get(`/trending/movie/${type}?language=en-US`);

    if (response.status === 200) {
        return response.data.results as Movie[];
    } else {
        throw new Error("Failed to fetch data");
    }
};

export const useGetTrendingMovies = (type: TrendingType, queryOptions?: QueryOptions<Movie[]>) =>
    useQuery({
        queryKey: [QUERY_KEY],
        queryFn: async () => await fetchData(type),
        ...queryOptions,
    });
