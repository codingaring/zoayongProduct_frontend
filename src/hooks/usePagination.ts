import { useState } from 'react';

type UsePaginationProps = {
  totalPage: number;
  itemsPerPage?: number;
};

export const usePagination = ({ totalPage, itemsPerPage = 5 }: UsePaginationProps) => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const startPage = currentGroup * itemsPerPage + 1;
  const endPage = Math.min(startPage + itemsPerPage - 1, totalPage);
  const hasPrevGroup = currentGroup > 0;
  const hasNextGroup = endPage < totalPage;

  const pages = Array.from({ length: endPage - startPage + 1 }, (_, idx) => startPage + idx);

  const goToPrevGroup = () => {
    if (hasPrevGroup) {
      setCurrentGroup(prev => prev - 1);
    }
  };

  const gotToNextGroup = () => {
    if (hasNextGroup) {
      setCurrentGroup(prev => prev + 1);
    }
  };
  return {
    pages,
    currentGroup,
    startPage,
    endPage,
    hasPrevGroup,
    hasNextGroup,
    goToPrevGroup,
    gotToNextGroup,
  };
};
