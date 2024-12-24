'use client';
import Image from 'next/image';
import Link from 'next/link';
import StoreLogo from '@assets/images/store_logo.webp';
import Button from '@components/Button';
import OAuth from './constants/oauth';

const Login = () => {
  return (
    <div className="flex w-full flex-col items-center gap-5">
      <Link href={'/'}>
        <Image src={StoreLogo} alt="조아용in스토어 로고" width={300} />
      </Link>
      <h1 className="mb-16 text-center text-lg text-white">조아용in스토어 상품이 더 궁금해진거예용?</h1>
      <div className="flex w-full max-w-[410px] flex-col gap-2.5 md:w-auto">
        {OAuth.map(oauth => (
          <Button
            className={'relative w-full border-none md:w-80'}
            variant={'simple'}
            onClick={oauth.onClick}
            key={oauth.oauth}
            style={{ backgroundColor: oauth.color }}>
            <Image
              src={oauth.icon}
              alt="구글로 간편 로그인"
              width={25}
              height={25}
              className="absolute top-1/2 -translate-y-1/2"
            />
            {`${oauth.oauth}로 간편 로그인`}
          </Button>
        ))}
      </div>
      <Link href={'/login/admin'} className="text-white hover:underline hover:underline-offset-8">
        관리자로 로그인
      </Link>
    </div>
  );
};

export default Login;
