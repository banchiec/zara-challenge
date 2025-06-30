import { Link } from 'react-router-dom';
import { Bag, Logo } from './components';
import { ROUTES } from '../../constants';
import './header.scss';
import { useCart } from '../../context/cartContext/cart-context';

const Header = () => {
  const { cart } = useCart();
  console.log(cart);
  return (
    <nav className="zara-challenge-header">
      <Link to={ROUTES.HOME} className="zara-challenge-header__logo">
        <Logo />
      </Link>
      <div className="zara-challenge-header__bag">
        <Link to={ROUTES.CART}>
          <Bag items={cart.length} />
        </Link>
      </div>
    </nav>
  );
};

export default Header;
