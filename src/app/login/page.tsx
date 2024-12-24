'use client';
import login from '@/apis/auth/login';

const Login = () => {
  return (
    <div>
      로그인
      <button onClick={login.googleLogin}>구글로 로그인</button>
    </div>
  );
};

export default Login;
