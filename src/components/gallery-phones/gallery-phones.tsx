import { Link } from 'react-router-dom';
import { CardPhone } from '../card-phone';
import type { PhoneTypes } from '../../types/phone-types';
import type { GalleryPhonesTypes } from '../../views/list-photos-view/components/gallery-phones/types';
import './gallery-phones.scss';

const GalleryPhones = (props: GalleryPhonesTypes) => {
  const { phones } = props;
  return (
    <section className="zara-challenge-gallery-phones">
      {phones.map((phone: PhoneTypes, index: number) => (
        <Link key={index} to={`/phone/${phone.id}`}>
          <CardPhone phone={phone} />
        </Link>
      ))}
    </section>
  );
};
export default GalleryPhones;
