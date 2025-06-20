import { BagIcon } from '../../../../assets/icons';
import type { BagTypes } from './types';

const Bag = (props: BagTypes) => {
  const { items } = props;
  console.log(items);

  const bagItems = localStorage.getItem('bagItems');
  const itemsBag = bagItems ? JSON.parse(bagItems).length : 0;
  return (
    <>
      <BagIcon />
      <span className="zara-challenge-header__bag-items">{itemsBag}</span>
    </>
  );
};

export default Bag;
