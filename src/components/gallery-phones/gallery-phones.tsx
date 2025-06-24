import type { GalleryPhonesTypes } from './types';
import { CardPhone } from '../card-phone';
import './gallery-phones.scss';

const GalleryPhones = (props: GalleryPhonesTypes) => {
  const { phones } = props;
  return (
    <section className="zara-challenge-gallery-phones">
      {phones.map((phone, index) => (
        <CardPhone key={index} phone={phone} />
      ))}
    </section>
  );
};
export default GalleryPhones;
