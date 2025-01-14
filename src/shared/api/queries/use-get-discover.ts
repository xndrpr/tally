import { api } from "..";
import { QueryOptions, useQuery } from "@tanstack/react-query";

const QUERY_KEY = "getTest";

const getDiscover = async () => {
    const response = await api.get("/trending/movie/day?language=en-US");

    if (response.status === 200) {
        return response.data.results;
    } else {
        throw new Error("Failed to fetch data");
    }
};

export const useGetDiscover = (queryOptions?: QueryOptions<string>) =>
    useQuery({
        queryKey: [QUERY_KEY],
        queryFn: async () => await getDiscover(),
        ...queryOptions,
    });
