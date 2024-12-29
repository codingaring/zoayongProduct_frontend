import { googleProvider, auth, signInWithPopup } from '@utils/initFirebase';
import httpClient from '../httpClient';

const http = httpClient();

type AdminKey = {
  email: string;
  password: string;
};

const login = {
  googleLogin: async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);

      // Id Token 가져오기
      const token = await result.user.getIdToken();

      // 서버에 토큰 전달
      const data = http.post('/login?type=google', { token: token });

      return data;
    } catch (error: any) {
      return console.error('구글 로그인 실패', error);
    }
  },
  adminLogin: async (adminKey: AdminKey) => {
    return http.post('/login?type=admin', adminKey);
  },
};

export default login;
