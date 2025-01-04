import { useQuery } from '@tanstack/react-query';
import { getProducts, GetProductsProps } from '@/apis/productAPI';

export function useGetProducts({ page = 1, limit = 15, sort = 'asc' }: GetProductsProps) {
  const query = useQuery({
    queryKey: ['products', page, limit, sort],
    queryFn: () => getProducts({ page, limit, sort }),
  });

  return query;
}
