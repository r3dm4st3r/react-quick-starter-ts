import { apiService } from '@services/api.service.ts';

const repo = apiService.injectEndpoints({
  endpoints: build => ({
    getRepos: build.query<any[], string>({
      query: name => `/users/${name}/repos`,
      providesTags: [{ type: 'GET_ALL_REPO' }],
      transformResponse: (response, meta): any => {
        if (meta?.response?.ok) {
          return response;
        }
      }
    })
  })
});

export const { useGetReposQuery } = repo;
