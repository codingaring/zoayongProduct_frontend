export type GetProductsResponse = {
  totalCount: number;
  currentPage: number;
  totalPages: number;
  products: Product[];
};

// Product type
export type Product = {
  category: Category;
  name: string;
  price: ProductPriceOption[] | ProductPriceOption;
  description: string;
  thumbnailImage: string;
  specifications: {
    specImage: string;
    specDetails: ProductSpecDetail;
    images?: string[];
  };
  options: ProductOptions;
  configurationOptions?: ConfigurationOption[];
  cautions: string[];
  customOptions: CustomOption[];
  relatedProducts: string[];
};

// Part of a Product type
type Category = '토이' | '잡화' | '리빙' | '문구/사무' | '봉제' | '포장';

type ProductPriceOption = {
  option: string;
  price: number;
};

type ProductSpecDetail = {
  name: string;
  extra: unknown;
};

type ProductOptions = ProductOption[];

type ProductOption = {
  optionName: string;
  optionColor?: string;
  optionPattern?: string;
  optionImage: string;
};

type ConfigurationOption = {
  optionImageUrl: string;
  option: string;
};

type CustomOption = {
  option: string;
  MOQ?: number;
  duration: string;
  characteristics?: string;
};
