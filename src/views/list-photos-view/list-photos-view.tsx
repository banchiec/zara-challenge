import { GalleryPhones } from '../../components';
import { useListPhones } from '../../hooks';
import './list-photos-view.scss';

const ListPhotosView = () => {
  const { phones, loading, error } = useListPhones();
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error}</div>;
  }
  if (!phones || phones.length === 0) {
    return <div>No phones available.</div>;
  }

  return (
    <div className="zara-challenge-list-photos-view">
      <GalleryPhones phones={phones} />
    </div>
  );
};

export default ListPhotosView;
