import { CURRENCIES } from '../../../../constants';
import { CART_PHONE } from '../cart-item-list/constants';
import './cart-actions.scss';

interface CartActionsTypes {
  isCartEmpty: boolean;
  totalPrice: number;
  handleContinue: () => void;
}
const CartActions = (props: CartActionsTypes) => {
  const { isCartEmpty, totalPrice, handleContinue } = props;

  return (
    <div className="zara-challenge-cart-items-actions">
      <div className="zara-challenge-cart-items-summary">
        <div className="cart-actions-left">
          <button
            className="zara-challenge-cart-items-continue"
            onClick={handleContinue}
          >
            {CART_PHONE.shopping_continue.toLocaleUpperCase()}
          </button>
        </div>

        <div className="cart-actions-right">
          {!isCartEmpty && (
            <>
              <div className="zara-challenge-cart-items-total">
                <span>{CART_PHONE.total.toLocaleUpperCase()}</span>
                <span>
                  {totalPrice.toFixed(2)} {CURRENCIES.EUR}
                </span>
              </div>
              <button className="zara-challenge-cart-items-pay">
                {CART_PHONE.ACTIONS.pay.toLocaleUpperCase()}
              </button>{' '}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
export default CartActions;
