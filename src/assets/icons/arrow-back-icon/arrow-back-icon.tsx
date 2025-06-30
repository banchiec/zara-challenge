import type { FC } from 'react';
import type { IconTypes } from '../../../types/index-types';

const ArrowBackIcon: FC<IconTypes> = (props: IconTypes) => {
  const { width = 20, height = 20, color = 'none', className } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <g clipPath="url(#clip0_20758_19055)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8233 5.64648L12.5304 6.35359L8.88394 10L12.5304 13.6465L11.8233 14.3536L7.46973 10L11.8233 5.64648Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_20758_19055">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default ArrowBackIcon;
