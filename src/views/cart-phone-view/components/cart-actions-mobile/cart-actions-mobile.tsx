import { CURRENCIES } from '../../../../constants';
import { CART_PHONE } from '../cart-item-list/constants';
import './cart-actions-mobile.scss';

interface CartActionsMobileTypes {
  isCartEmpty: boolean;
  totalPrice: number;
  handleContinue: () => void;
}

const CartActionsMobile = (props: CartActionsMobileTypes) => {
  const { isCartEmpty, totalPrice, handleContinue } = props;

  return (
    <div className="zara-challenge-cart-items-actions-mobile">
      {!isCartEmpty ? (
        <div className="zara-challenge-cart-items-summary">
          <div className="zara-challenge-cart-items-total">
            <span>{CART_PHONE.total}</span>
            <span>
              {totalPrice.toFixed(2)} {CURRENCIES.EUR}
            </span>
          </div>
          <div className="zara-challenge-cart-items-buttons">
            <div className="zara-challenge-cart-items-buttons">
              <button
                className="zara-challenge-cart-items-continue"
                onClick={handleContinue}
              >
                {CART_PHONE.shopping_continue}
              </button>
            </div>
            <button className="zara-challenge-cart-items-pay">PAY</button>
          </div>
        </div>
      ) : (
        <div className="zara-challenge-cart-items-summary">
          <div className="zara-challenge-cart-items-buttons">
            <button
              className="zara-challenge-cart-items-continue"
              onClick={handleContinue}
            >
              {CART_PHONE.shopping_continue}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default CartActionsMobile;
