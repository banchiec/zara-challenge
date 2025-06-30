import { CardPhone } from '../../../../components';
import type { CardPhoneTypes } from '../../../../components/card-phone/types';
import { DETAIL_PHONE } from '../../constants';
import './carousel-phone.scss';

type CarouselPhonesProps = {
  phones: CardPhoneTypes['phone'][];
};

const CarouselPhones = ({ phones }: CarouselPhonesProps) => {
  return (
    <section className="zara-carousel-section">
      <h2 className="zara-carousel-title">
        {DETAIL_PHONE.similar_products.toLocaleUpperCase()}
      </h2>
      <div className="zara-carousel">
        {phones.map((phone) => (
          <div key={phone.id} className="zara-carousel-card-wrapper">
            <CardPhone phone={phone} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarouselPhones;
