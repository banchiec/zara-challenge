import { INPUT_SEARCH } from '../../constants';
import { usePhones } from '../../context/AppContext/app-context';
import { GalleryPhones } from './components';
import SearchPhones from './components/search-phones/search-phones';
import './list-photos-view.scss';

const ListPhotosView = () => {
  const { filteredPhones } = usePhones();

  return (
    <div className="zara-challenge-list-photos-view">
      <SearchPhones
        name={INPUT_SEARCH.name}
        placeHolder={INPUT_SEARCH.placeHolder}
        className="zara-challenge-list-photos-view__input-search"
      />
      <GalleryPhones phones={filteredPhones} />
    </div>
  );
};

export default ListPhotosView;
