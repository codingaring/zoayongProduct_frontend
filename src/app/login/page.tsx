'use client';
import Link from 'next/link';
import login from '@/apis/auth/login';

const Login = () => {
  return (
    <div>
      로그인
      <button onClick={login.googleLogin}>구글로 로그인</button>
      <Link href={'/login/admin'}>관리자로 로그인</Link>
    </div>
  );
};

export default Login;
