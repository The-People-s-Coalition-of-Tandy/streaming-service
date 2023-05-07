import {
    createApi,
    fetchBaseQuery
} from "@reduxjs/toolkit/query/react";

export const songsApi = createApi({
    reducerPath: "songsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://raw.githubusercontent.com/The-People-s-Coalition-of-Tandy/Assets/main/Streaming/"
    }),
    endpoints: (builder) => ({
        getAllSongs: builder.query({
            query: () => "data.json",
        }),
    }),
});

export const {
    useGetAllSongsQuery
} = songsApi;