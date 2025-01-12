import { QueryOptions, useQuery } from "@tanstack/react-query";

const QUERY_KEY = "getTest";

const getTest = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return "Hello World";
};

export const useGetTest = (queryOptions?: QueryOptions<string>) =>
    useQuery({
        queryKey: [QUERY_KEY],
        queryFn: async () => await getTest(),
        ...queryOptions,
    });
