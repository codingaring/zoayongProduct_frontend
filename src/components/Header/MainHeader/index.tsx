import Image from 'next/image';
import Link from 'next/link';
import storeLogo from '@assets/images/store_logo.webp';
import CategoryAndSearch from './CategoryAndSearch';

const MainHeader = () => {
  return (
    <>
      <div className="flex w-full justify-between bg-green-40 px-5 pt-9 md:px-12">
        <Link href={'/'}>
          <Image src={storeLogo} width={215} height={48} alt="조아용in스토어" className="mx-auto mb-3" />
        </Link>
        <Link href={'/login'} className="text-white hover:underline hover:underline-offset-4">
          로그인
        </Link>
      </div>
      <CategoryAndSearch />
    </>
  );
};

export default MainHeader;
