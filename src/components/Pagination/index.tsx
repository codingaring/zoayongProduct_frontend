import { cx } from 'class-variance-authority';
import { HTMLAttributes } from 'react';
import LeftArrowIcon from '@assets/icons/components/LeftArrowIcon';
import RightArrowIcon from '@assets/icons/components/RightArrowIcon';
import { usePagination } from '@hooks/usePagination';
import { cn } from '@utils/cn';

type PaginationProps = {
  totalPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

const Pagination = ({ totalPage, currentPage, onPageChange, className, ...props }: PaginationProps) => {
  const { pages, hasPrevGroup, hasNextGroup, goToPrevGroup, gotToNextGroup } = usePagination({ totalPage });

  return (
    <div className={cn('flex items-center gap-5', className)} {...props}>
      <button type="button" onClick={goToPrevGroup} disabled={!hasPrevGroup}>
        <LeftArrowIcon color="#d9d9d9" width={'15'} height={'15'} />
      </button>
      <div className="flex gap-3.5">
        {pages.map(page => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={cn('w-3 text-center', cx(currentPage === page ? 'font-bold text-green-40' : ''))}>
            {page}
          </button>
        ))}
      </div>

      <button type="button" onClick={gotToNextGroup} disabled={!hasNextGroup}>
        <RightArrowIcon color="#d9d9d9" width={'15'} height={'15'} />
      </button>
    </div>
  );
};

export default Pagination;
