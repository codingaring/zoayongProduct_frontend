import searchIcon from '@assets/icons/search.svg';
import PrimaryInput from '@components/PrimaryInput';
import { CATEGORY_LIST } from '@constants/category';
import CategoryButton from './CategoryButton';

const CategoryAndSearch = () => {
  return (
    <div
      className={`sticky top-0 z-10 flex flex-col items-center gap-2.5 bg-green-40 px-5 md:flex-row-reverse md:justify-between md:gap-14 md:px-12`}>
      <PrimaryInput rightIcon={searchIcon} placeholder="찾고 계신 상품이 있으신가요?" className="lg:max-w-72" />
      <div className="flex w-full grow justify-between lg:max-w-2xl lg:grow-0">
        {CATEGORY_LIST.map(category => (
          <CategoryButton key={category} variant={category === '리빙' ? 'select' : null} category={category} />
        ))}
      </div>
    </div>
  );
};

export default CategoryAndSearch;
