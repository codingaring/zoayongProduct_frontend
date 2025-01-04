import { cn } from '@utils/cn';
import { IconBaseType } from './IconBaseType';

const LeftArrowIcon = ({ className, color = '#C7C7C7', width = '10', height = '13' }: IconBaseType) => {
  return (
    <svg
      className={cn(className)}
      width={width}
      height={height}
      viewBox="0 0 10 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M-2.84124e-07 6.5L9.75 0.870834L9.75 12.1292L-2.84124e-07 6.5Z" fill={color} />
    </svg>
  );
};

export default LeftArrowIcon;
