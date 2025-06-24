import type { CardPhoneTypes } from './types';
import { CURRENCIES } from '../../constants';
import './card-phone.scss';

const CardPhone = (props: CardPhoneTypes) => {
  const { phone } = props;
  const { imageUrl, name, brand, basePrice } = phone;
  return (
    <div className="zara-challenge-card-phone">
      <div className="zara-challenge-card-phone__image">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="zara-challenge-card-phone__info">
        <div className="zara-challenge-card-phone__info__brand">
          <p className="zara-challenge-card-phone__info__brand-name">
            {brand.toUpperCase()}
          </p>
          <h2 className="zara-challenge-card-phone__info__brand-product">
            {name.toUpperCase()}
          </h2>
        </div>
        <div className="zara-challenge-card-phone__info__price">
          <p>{`${basePrice} ${CURRENCIES.EUR}`}</p>
        </div>
      </div>
    </div>
  );
};

export default CardPhone;
