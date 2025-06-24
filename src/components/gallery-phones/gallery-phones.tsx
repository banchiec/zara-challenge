import type { GalleryPhonesTypes } from './types';
import { Link } from 'react-router-dom';
import { CardPhone } from '../card-phone';
import './gallery-phones.scss';

const GalleryPhones = (props: GalleryPhonesTypes) => {
  const { phones } = props;
  return (
    <section className="zara-challenge-gallery-phones">
      {phones.map((phone, index) => (
        <Link key={index} to={`/phone/${phone.id}`}>
          <CardPhone phone={phone} />
        </Link>
      ))}
    </section>
  );
};
export default GalleryPhones;
