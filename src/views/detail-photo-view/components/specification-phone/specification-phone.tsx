import type { SpecsDetailPhoneTypes } from './types';
import { DETAIL_PHONE } from '../../constants';
import './specification-phone.scss';
import { formatLabel } from '../../../../utils';

const SpecsList = ({ specsPhone }: SpecsDetailPhoneTypes) => {
  return (
    <div className="zara-challenge-detail-phone-specs">
      <h3 className="zara-challenge-detail-phone-specs-title">
        {DETAIL_PHONE.specification.toUpperCase()}
      </h3>

      <dl className="zara-challenge-detail-phone-specs-list">
        {Object.entries(specsPhone).map(([key, value]) => (
          <div
            key={key}
            className="zara-challenge-detail-phone-specs-list__item"
          >
            <dt className="zara-challenge-detail-phone-specs-list__label">
              {formatLabel(key).toUpperCase()}
            </dt>
            <dd className="zara-challenge-detail-phone-specs-list__value">
              {value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};

export default SpecsList;
