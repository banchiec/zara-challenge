import type { FC } from 'react';
import type { IconTypes } from '../../../types/index-types';

const StartIcon: FC<IconTypes> = (props: IconTypes) => {
  const { width = 16, height = 15, color = 'black', className } = props;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.43652 0.429688H9.57979V15.0011H6.43652V0.429688Z"
        fill={color}
      />
      <path
        d="M15.2939 6.14453L15.2939 9.2878L0.722516 9.2878L0.722516 6.14453L15.2939 6.14453Z"
        fill={color}
      />
      <path
        d="M12.0488 1.45312L14.2715 3.67575L3.9679 13.9793L1.74527 11.7567L12.0488 1.45312Z"
        fill={color}
      />
      <path
        d="M14.2715 11.7578L12.0489 13.9804L1.7453 3.67688L3.96793 1.45426L14.2715 11.7578Z"
        fill={color}
      />
    </svg>
  );
};

export default StartIcon;
