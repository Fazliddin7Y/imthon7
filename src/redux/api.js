import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://nt-devconnector.onrender.com/profiles' }),
  endpoints: (builder) => ({
    getTeachers: builder.query({
      query: () => '/teachers',
    }),
  }),
});

export const { useGetTeachersQuery } = api;
