import { ReduxTagTypes } from '../tagTypes';
import apiService from './index';

export type User = {
  id: number;
  username: string;
  token: string;
  createdAt: string;
  updatedAt: string;
};

export type AuthInput = {
  username: string;
  password: string;
};

const authService = apiService.injectEndpoints({
  endpoints: (build) => ({
    currentUser: build.query<User, void>({
      query: () => '/auth/me',
      providesTags: [ReduxTagTypes.User],
    }),
    regster: build.mutation<void, AuthInput>({
      query: (body) => ({
        url: '/auth/register',
        method: 'POST',
        body,
      }),
    }),
    login: build.mutation<User, AuthInput>({
      query: (body) => ({
        url: '/auth/login',
        method: 'POST',
        body,
      }),
      transformResponse: (response: User) => {
        localStorage.setItem('token', response.token);
        return response;
      },
      invalidatesTags: [ReduxTagTypes.User],
    }),
  }),
});

export const { useCurrentUserQuery, useLoginMutation, useRegsterMutation } =
  authService;
