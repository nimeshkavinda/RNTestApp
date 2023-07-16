import {loginApi, authApi} from '../apiConfig';

const login = (email: string, password: string) => {
  return loginApi.post('login', {
    email,
    password,
  });
};

const updateRefreshToken = (token: string) => {
  return authApi.post('refresh-token', {
    refreshToken: token,
  });
};

const getProfile = () => {
  return authApi.get('profile');
};

const authService = {
  login,
  updateRefreshToken,
  getProfile,
};

export default authService;
