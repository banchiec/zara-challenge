import { useNavigate } from 'react-router-dom';
import { useCart } from '../../../../context/cartContext/cart-context';
import './cart-item-list.scss';
import { CURRENCIES, ROUTES } from '../../../../constants';
import { CART_PHONE } from './constants';
import CartActionsMobile from '../cart-actions-mobile';
import CartActions from '../cart-actions';

const CartItemsList = () => {
  const { cart, deleteItemCart } = useCart();

  const isCartEmpty = cart?.length === 0;
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate(ROUTES.HOME);
  };
  return (
    <div className="zara-challenge-cart-items">
      <h2 className="zara-challenge-cart-items-title">{`CART (${cart.length})`}</h2>

      <ul className="zara-challenge-cart-items-list">
        {cart.map((item, index) => (
          <li
            key={`${item.id}-${index}`}
            className="zara-challenge-cart-items-item"
          >
            <div className="zara-challenge-cart-items-item__image">
              <img
                className="zara-challenge-cart-items-item__image__item"
                src={item.imageUrl}
                alt={item.name}
              />
            </div>
            <div className="zara-challenge-cart-items-item__info">
              <div>
                <h3>{item.name.toLocaleUpperCase()}</h3>
                <p>{`${item.storage.toLocaleUpperCase()}| ${item.color.toLocaleUpperCase()}`}</p>
              </div>
              <p>
                {item.price} {CURRENCIES.EUR}
              </p>
              <button
                onClick={() => deleteItemCart(item.id)}
                className="zara-challenge-cart-items-item-clear"
              >
                {CART_PHONE.ACTIONS.delete}
              </button>
            </div>
          </li>
        ))}
      </ul>
      <CartActionsMobile
        isCartEmpty={isCartEmpty}
        totalPrice={totalPrice}
        handleContinue={handleContinue}
      />
      <CartActions
        isCartEmpty={isCartEmpty}
        totalPrice={totalPrice}
        handleContinue={handleContinue}
      />
      {/** 
       * 
      <div className="zara-challenge-cart-items-actions">
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
      */}
    </div>
  );
};

export default CartItemsList;
