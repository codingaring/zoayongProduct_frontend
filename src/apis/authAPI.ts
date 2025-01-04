import { googleProvider, auth, signInWithPopup } from '@utils/initFirebase';
import httpClient from './httpClient';

const http = httpClient();

export type AdminKey = {
  email: string;
  password: string;
};

type LoginResponse = {
  accessToken: string;
};

// Google 로그인
export async function googleLogin() {
  const result = await signInWithPopup(auth, googleProvider);
  const token = await result.user.getIdToken();
  const data = http.post<LoginResponse, { token: string }>('/login?type=google', { token: token });

  return data;
}

// Kakao로그인

// 관리자 로그인
export async function adminLogin(adminKey: AdminKey) {
  return http.post<LoginResponse, AdminKey>('/login?type=admin', adminKey);
}
