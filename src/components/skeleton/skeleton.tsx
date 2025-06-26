import type { FC } from 'react';
import type { SkeletonTypes } from './types';
import './skeleton.scss';

export const Skeleton: FC<SkeletonTypes> = (props: SkeletonTypes) => {
  const { kind = 'rectangular', className } = props;
  return (
    <>
      {kind === 'rectangular' && (
        <div
          data-testid="skeleton"
          className={`skeleton skeleton__rectangular ${className}`}
        />
      )}
      {kind === 'circular' && (
        <div
          data-testid="skeleton"
          className={`skeleton skeleton__circular ${className}`}
        />
      )}
      {kind === 'text' && (
        <div
          data-testid="skeleton"
          className={`skeleton skeleton__text ${className}`}
        />
      )}
    </>
  );
};
