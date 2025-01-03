import { googleProvider, auth, signInWithPopup } from '@utils/initFirebase';
import httpClient from '../httpClient';

const http = httpClient();

export type AdminKey = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
};

const login = {
  googleLogin: async () => {
    const result = await signInWithPopup(auth, googleProvider);
    const token = await result.user.getIdToken();
    const data = http.post<LoginResponse, { token: string }>('/login?type=google', { token: token });

    return data;
  },
  adminLogin: async (adminKey: AdminKey) => {
    return http.post<LoginResponse, AdminKey>('/login?type=admin', adminKey);
  },
};

export default login;
