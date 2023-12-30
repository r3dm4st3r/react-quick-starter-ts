import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from '@utils/redux.ts';

export const baseQuery = fetchBaseQuery({
  baseUrl: 'https://api.github.com',
  prepareHeaders: (headers, { getState }) => {
    // Add auth mechanism to pass tokens to the header
    const token = (getState as unknown as RootState)?.app?.auth?.token;
    if (token?.access) {
      headers.set('Authorization', `Bearer ${token.access}`);
    } else {
      headers.delete('Authorization');
    }
    return headers;
  }
});

export const apiService = createApi({
  baseQuery: baseQuery,
  tagTypes: ['GET_ALL_REPO'],
  refetchOnReconnect: true,
  endpoints: () => ({})
});
