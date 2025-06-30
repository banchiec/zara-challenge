import { Skeleton } from '../skeleton';
import './card-phone-skeleton.scss';

const CardSkeletonPhone = () => {
  return (
    <div className="zara-challenge-card-phone-skeleton">
      <div className="zara-challenge-card-phone-skeleton__image">
        <Skeleton kind="rectangular" />
      </div>
      <div className="zara-challenge-card-phone-skeleton__info">
        <div className="zara-challenge-card-phone-skeleton__info__brand">
          <p className="zara-challenge-card-phone-skeleton__info__brand-name"></p>
          <h2 className="zara-challenge-card-phone-skeleton__info__brand-product"></h2>
        </div>
        <div className="zara-challenge-card-phone-skeleton__info__price">
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default CardSkeletonPhone;
