import httpClient from './httpClient';
import { GetProductsResponse } from './schema/productSchema';

export type GetProductsProps = {
  page?: number;
  limit?: number;
  sort: 'asc' | 'desc';
};

const http = httpClient();

// 전체 상품 조회하기
export async function getProducts({ page = 1, limit = 10, sort = 'asc' }: GetProductsProps) {
  return await http.get<GetProductsResponse>('/products', { page, limit, sort });
}
