import { useMutation } from '@tanstack/react-query';
import login, { AdminKey } from '@/apis/auth/login';
import { setCookie } from '@utils/cookie';

// 구글 로그인 Mutation
export const useGoogleLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: async () => await login.googleLogin(),
    onSuccess: data => {
      setCookie('accessToken', data.accessToken);
    },
    onError: (error: any) => {
      console.error('Error :', error);
    },
  });
  return mutation;
};

// 관리자 로그인 Mutation
export const useAdminLoginMutation = () => {
  const mutation = useMutation({
    mutationFn: async (adminKey: AdminKey) => await login.adminLogin(adminKey),
    onSuccess: data => {
      setCookie('accessToken', data.accessToken);
    },
    onError: error => {
      console.error('Admin login failed:', error);
      // 에러 처리 로직
    },
  });

  return mutation;
};
