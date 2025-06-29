import { useParams, useNavigate } from 'react-router-dom';
import useDetailPhone from '../../hooks/phone/use-detail-phone';
import { lazy, Suspense } from 'react';
import './detail-phone-view.scss';
import { usePhones } from '../../context/AppContext/app-context';
import { ArrowBackIcon } from '../../assets/icons';
import { DETAIL_PHONE } from './constants';

const DetailPhoneView = () => {
  const { id } = useParams<{ id: string }>();
  const { phone } = useDetailPhone(id ?? '');
  const { phones } = usePhones();
  const navigate = useNavigate();

  const CardDetailPhone = lazy(
    () => import('./components/card-form-detail-phone')
  );
  const SpecsListPhone = lazy(() => import('./components/specification-phone'));
  const CarouselPhones = lazy(() => import('./components/carouselPhone'));

  const specsPhone = {
    brand: phone?.brand,
    name: phone?.name,
    description: phone?.description,
    screen: phone?.description,
    resolution: phone?.specs.resolution,
    processor: phone?.specs.processor,
    mainCamera: phone?.specs.mainCamera,
    selfieCamera: phone?.specs.selfieCamera,
    battery: phone?.specs.battery,
    os: phone?.specs.os,
    screeRefreshRate: phone?.specs.screenRefreshRate,
  };

  return (
    <div className="zara-challenge-detail-phone-view">
      <button
        className="zara-challenge-detail-phone-view__back-button"
        onClick={() => navigate(-1)}
      >
        <ArrowBackIcon />
        <span>{DETAIL_PHONE.back.toLocaleUpperCase()}</span>
      </button>
      <Suspense fallback={<div>Loading</div>}>
        {phone && <CardDetailPhone phone={phone} />}
        {phone && <SpecsListPhone specsPhone={specsPhone} />}
        {phone && <CarouselPhones phones={phones} />}
      </Suspense>
    </div>
  );
};

export default DetailPhoneView;
