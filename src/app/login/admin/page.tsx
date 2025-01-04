'use client';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { MouseEvent, useEffect } from 'react';
import Button from '@components/Button';
import PrimaryInput from '@components/PrimaryInput';
import { useAdminLoginMutation } from '@hooks/reactQuery/authMutation';
import useInputValue from '@hooks/useInputValue';
import { getCookie } from '@utils/cookie';

const AdminLogin = () => {
  const { value: email, handleChangeValue: handleEmailChange } = useInputValue();
  const { value: password, handleChangeValue: handlePasswordChange } = useInputValue();
  const { mutate: adminLogin } = useAdminLoginMutation();

  const handleAdminLogin = (event: SubmitEvent | MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    adminLogin({ email: email, password: password });
  };

  useEffect(() => {
    const accessToken = getCookie('accessToken');
    if (accessToken) {
      redirect('/');
    }
  }, []);

  return (
    <div className="flex w-full max-w-md flex-col items-center gap-10 md:max-w-lg">
      <h1 className="text-2xl font-bold text-white md:text-3xl">관리자 로그인</h1>
      <form onSubmit={() => handleAdminLogin} className="flex w-full flex-col gap-2.5">
        <PrimaryInput placeholder="이메일을 입력해주세요" onChange={handleEmailChange} value={email} />
        <PrimaryInput placeholder="비밀번호를 입력해주세요" onChange={handlePasswordChange} value={password} />
        <Button
          disabled={!email || !password}
          onClick={handleAdminLogin}
          variant="simple"
          className="mt-2 rounded-xl border-none bg-yellow-30 active:bg-yellow-50 disabled:opacity-50 disabled:active:bg-yellow-50">
          로그인
        </Button>
      </form>
      <div className="flex w-full justify-center gap-5 text-white">
        <Link href={'/login'} className="hover:underline hover:underline-offset-8">
          간편 로그인하기
        </Link>
        <Link href={'/'} className="hover:underline hover:underline-offset-8">
          메인으로 가기
        </Link>
      </div>
    </div>
  );
};

export default AdminLogin;
