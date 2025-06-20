import { EclipseIcon, StartIcon } from '../../../assets/icons';
import { APP_NAME } from '../../../constants';

const Logo = () => {
  return (
    <>
      <EclipseIcon />
      <StartIcon />
      <span className="zara-challenge-header__title">{APP_NAME}</span>
    </>
  );
};
export default Logo;
