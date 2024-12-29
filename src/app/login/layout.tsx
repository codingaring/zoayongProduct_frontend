import { PropsWithChildren } from 'react';
import { GmarketSans } from '@styles/fonts';

const loginLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <body className={`${GmarketSans.className} flex h-screen w-full items-center justify-center bg-green-10 px-5`}>
        {children}
      </body>
    </>
  );
};

export default loginLayout;
