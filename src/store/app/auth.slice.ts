import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@utils/redux.ts';

export type IAuthToken = {
  readonly access: string;
  readonly refresh: string;
  readonly expires: string;
};
export type IAuthSlice = {
  token: IAuthToken;
  isLoggedIn: boolean;
};
const initialState: IAuthSlice = {
  token: {
    access: '',
    refresh: '',
    expires: ''
  },
  isLoggedIn: false
};

export const authSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    SET_AUTH_TOKEN: (state, action: PayloadAction<IAuthToken>) => ({
      ...state,
      token: action.payload,
      isLoggedIn: !!state.token.access
    })
  }
});

export const { SET_AUTH_TOKEN } = authSlice.actions;

export const GET_AUTH_CONFIG = (state: RootState) => state.app.auth;
