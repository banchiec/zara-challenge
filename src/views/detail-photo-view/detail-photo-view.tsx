import { useParams } from 'react-router-dom';
import useDetailPhone from '../../hooks/phone/use-detail-phone';
import { lazy, Suspense } from 'react';
import './detail-phone-view.scss';

const DetailPhotoView = () => {
  const { id } = useParams<{ id: string }>();
  const { phone } = useDetailPhone(id ?? '');

  const CardDetailPhone = lazy(
    () => import('./components/card-form-detail-phone')
  );
  const SpecsListPhone = lazy(() => import('./components/specification-phone'));

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
      <Suspense fallback={<div>Loading</div>}>
        {phone && <CardDetailPhone phone={phone} />}
        {phone && <SpecsListPhone specsPhone={specsPhone} />}
      </Suspense>
    </div>
  );
};

export default DetailPhotoView;
