import { Link } from 'react-router-dom';
import { Logo } from '../components/logo';
import './header.scss';
import Bag from '../components/bag/bag';

const Header = () => {
  return (
    <nav className="zara-challenge-header">
      <Link to={'/'} className="zara-challenge-header__logo">
        <Logo />
      </Link>
      <div className="zara-challenge-header__bag">
        <Bag />
      </div>
    </nav>
  );
};

export default Header;
