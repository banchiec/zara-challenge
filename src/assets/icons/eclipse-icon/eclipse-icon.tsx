import type { FC } from 'react';
import type { IconTypes } from '../../../types/index-types';

const EclipseIcon: FC<IconTypes> = ({
  width = 13,
  height = 15,
  color = 'black',
  className,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 13 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.8454 2.23917C11.485 0.857001 9.59259 0 7.5 0C3.35786 0 0 3.35786 0 7.5C0 11.6421 3.35786 15 7.5 15C9.50619 15 11.3284 14.2123 12.6742 12.9293C11.6202 11.4554 11 9.65014 11 7.7C11 5.64651 11.6877 3.75364 12.8454 2.23917Z"
        fill={color}
      />
    </svg>
  );
};

export default EclipseIcon;
