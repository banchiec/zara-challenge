import type { GalleryPhonesTypes } from './types';
import { lazy, Suspense } from 'react';
import { CardSkeletonPhone } from '../../../../components/card-phone-skeleton';
import './gallery-phones.scss';
import { Link } from 'react-router-dom';

const GalleryPhones = (props: GalleryPhonesTypes) => {
  const { phones } = props;
  const CardPhone = lazy(
    () => import('../../../../components/card-phone/card-phone')
  );

  return (
    <section className="zara-challenge-gallery-phones">
      {phones.map((phone, index) => (
        <Suspense key={index} fallback={<CardSkeletonPhone />}>
          <Link key={index} to={`/phone/${phone.id}`}>
            <CardPhone phone={phone} />
          </Link>
        </Suspense>
      ))}
    </section>
  );
};
export default GalleryPhones;
