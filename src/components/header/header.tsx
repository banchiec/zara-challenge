import { Link } from 'react-router-dom';
import { Bag, Logo } from './components';
import { ROUTES } from '../../constants';
import './header.scss';

const Header = () => {
  return (
    <nav className="zara-challenge-header">
      <Link to={ROUTES.HOME} className="zara-challenge-header__logo">
        <Logo />
      </Link>
      <div className="zara-challenge-header__bag">
        <Bag items={0} />
      </div>
    </nav>
  );
};

export default Header;
