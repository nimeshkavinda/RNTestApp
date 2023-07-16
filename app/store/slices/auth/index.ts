import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from '../../../api/authService';

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
  role: string;
  avatar: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface AuthState {
  loggedIn: boolean;
  user: User | null;
  accessToken: string;
  refreshToken: string;
  loginStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  refreshTokenStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
  getProfileStatus: 'idle' | 'loading' | 'succeeded' | 'failed';
}

export const initialState: AuthState = {
  loggedIn: false,
  user: null,
  accessToken: '',
  refreshToken: '',
  loginStatus: 'idle',
  refreshTokenStatus: 'idle',
  getProfileStatus: 'idle',
};

export const login = createAsyncThunk(
  'auth/login',
  async ({email, password}: LoginPayload) => {
    const res = await authService.login(email, password);
    return res.data;
  },
);

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (token: string) => {
    const res = await authService.updateRefreshToken(token);
    return res.data;
  },
);

export const getProfile = createAsyncThunk('auth/getProfile', async () => {
  const res = await authService.getProfile();
  return res.data;
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    globalLogOut: state => {
      state.loggedIn = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(login.pending, state => {
        state.loginStatus = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loginStatus = 'succeeded';
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
        state.loggedIn = true;
      })
      .addCase(login.rejected, state => {
        state.loginStatus = 'failed';
      })
      .addCase(refreshToken.pending, state => {
        state.refreshTokenStatus = 'loading';
      })
      .addCase(refreshToken.fulfilled, (state, action) => {
        state.refreshTokenStatus = 'succeeded';
        state.accessToken = action.payload.access_token;
        state.refreshToken = action.payload.refresh_token;
      })
      .addCase(refreshToken.rejected, state => {
        state.refreshTokenStatus = 'failed';
      })
      .addCase(getProfile.pending, state => {
        state.getProfileStatus = 'loading';
      })
      .addCase(getProfile.fulfilled, (state, action) => {
        state.getProfileStatus = 'succeeded';
        state.user = action.payload;
      })
      .addCase(getProfile.rejected, state => {
        state.getProfileStatus = 'failed';
      });
  },
});

export const {globalLogOut} = authSlice.actions;
export const authActions = {
  ...authSlice.actions,
  globalLogOut,
};
export const authReducer = authSlice.reducer;

export default authReducer;
