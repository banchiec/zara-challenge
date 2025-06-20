import React from 'react';
import type { IconTypes } from '../../../types';

const BagIcon: React.FC<IconTypes> = (props: IconTypes) => {
  const { width = 24, height = 24, color = 'black', className } = props;
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.4706 4H9.76471V7.76471H6V20H18.2353V7.76471H14.4706V4ZM13.5294 7.76471V11.0588H14.4706V7.76471H13.5294ZM10.7059 7.76471V11.0588H9.76471V7.76471H10.7059ZM10.7059 7.76471H13.5294V4.94118H10.7059V7.76471Z"
        fill={color}
      />
    </svg>
  );
};

export default BagIcon;
