import axios, {AxiosError} from 'axios';
import {store} from '../store/store';
import authService from './authService';
import {refreshToken} from '../store/slices/auth';

const AUTH_BASE_URL = 'https://api.escuelajs.co/api/v1/auth/';
const PRODUCTS_BASE_URL =
  'https://8c155025-93d6-4ead-a36d-9afdf9c1f291.mock.pstmn.io';

export const loginApi = axios.create({
  baseURL: AUTH_BASE_URL,
});

export const authApi = axios.create({
  baseURL: AUTH_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  withCredentials: true,
});

export const productsApi = axios.create({
  baseURL: PRODUCTS_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${ACCESS_TOKEN}`,
  },
  withCredentials: true,
});

// Add interceptor to authApi for access token
authApi.interceptors.request.use(
  config => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add interceptor to authApi for handling token expiration
authApi.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      const state = store.getState();
      const refToken = state.auth.refreshToken;
      if (refToken) {
        // Make a request to refresh the access token using the refresh token
        return authService
          .updateRefreshToken(refToken)
          .then(response => {
            const newAccessToken = response.data.access_token;
            // Dispatch an action to update the access token in the Redux store
            store.dispatch(refreshToken(newAccessToken));
            // Retry the original request with the new access token
            const originalRequest = error.config;
            if (originalRequest) {
              originalRequest.headers[
                'Authorization'
              ] = `Bearer ${newAccessToken}`;
              return axios(originalRequest);
            } else {
              return Promise.reject(error);
            }
          })
          .catch(refreshError => {
            return Promise.reject(refreshError);
          });
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);

// Add interceptor to productsApi for access token
productsApi.interceptors.request.use(
  config => {
    const state = store.getState();
    const accessToken = state.auth.accessToken;
    if (accessToken) {
      config.headers['Authorization'] = `Bearer ${accessToken}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// Add interceptor to authApi for handling token expiration
productsApi.interceptors.response.use(
  response => {
    return response;
  },
  (error: AxiosError) => {
    if (error.response && error.response.status === 401) {
      const state = store.getState();
      const refToken = state.auth.refreshToken;
      if (refToken) {
        // Make a request to refresh the access token using the refresh token
        return authService
          .updateRefreshToken(refToken)
          .then(response => {
            const newAccessToken = response.data.access_token;
            // Dispatch an action to update the access token in the Redux store
            store.dispatch(refreshToken(newAccessToken));
            // Retry the original request with the new access token
            const originalRequest = error.config;
            if (originalRequest) {
              originalRequest.headers[
                'Authorization'
              ] = `Bearer ${newAccessToken}`;
              return axios(originalRequest);
            } else {
              return Promise.reject(error);
            }
          })
          .catch(refreshError => {
            return Promise.reject(refreshError);
          });
      } else {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  },
);
