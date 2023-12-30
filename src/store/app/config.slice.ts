import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '@utils/redux.ts';

export type IConfigSlice = {
  isMobile: boolean;
};
const initialState: IConfigSlice = {
  isMobile: false
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {
    SET_IS_MOBILE: (state, action: PayloadAction<boolean>) => ({
      ...state,
      isMobile: action.payload
    })
  }
});

export const { SET_IS_MOBILE } = configSlice.actions;

export const GET_APP_CONFIG = (state: RootState) => state.app.config;
