'use client';

import Image from 'next/image';
import { useState } from 'react';
import Pagination from '@components/Pagination';
import { useGetProducts } from '@hooks/reactQuery/productQuery';

const Page = () => {
  const [page, setPage] = useState(1);

  const handleSetPage = (page: number) => {
    setPage(page);
  };

  const { data } = useGetProducts({ page: page, limit: 4, sort: 'asc' });

  if (!data) {
    return <div>데이터없음</div>;
  }

  return (
    <div>
      <h1>상품 목록 관리하기</h1>
      {data.products.map(product => {
        return (
          <div key={product.name} className="flex flex-col">
            <Image
              src={
                'https://firebasestorage.googleapis.com/v0/b/zoayongproduct.firebasestorage.app/o/products%2F%EB%A8%B8%EA%B7%B8.png?alt=media&token=ed28a2d5-729a-404f-8228-af4be2ea3223'
              }
              alt={product.name}
              width={134}
              height={134}
            />
            <div>{product.category}</div>
            <div>{product.name}</div>
          </div>
        );
      })}
      <Pagination totalPage={data.totalPages} currentPage={data.currentPage} onPageChange={handleSetPage} />
    </div>
  );
};

export default Page;
