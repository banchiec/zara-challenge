import { BagIcon } from '../../../../assets/icons';
import type { BagTypes } from './types';

const Bag = (props: BagTypes) => {
  const { items } = props;

  return (
    <>
      <BagIcon />
      <span className="zara-challenge-header__bag-items">{items}</span>
    </>
  );
};

export default Bag;
