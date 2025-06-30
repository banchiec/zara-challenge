import { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type {
  CardFormDetailPhoneTypes,
  PhoneDetailFormValuesTypes,
} from './types';
import { phoneDetailSchema } from './schema';
import { CURRENCIES } from '../../../../constants';
import { DETAIL_PHONE } from '../../constants';
import { useNavigate } from 'react-router-dom';
import './card-form-detail-phone.scss';
import { useCart } from '../../../../context/cartContext/cart-context';

const CardFormDetailPhone = (props: CardFormDetailPhoneTypes) => {
  const { phone } = props;
  const [touchedColor, setTouchedColor] = useState(false);
  const [touchedStorage, setTouchedStorage] = useState(false);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState(phone.colorOptions[0]);

  const defaultColor = phone.colorOptions[0];
  const defaultStorage = phone.storageOptions[0];

  const { control, handleSubmit, watch } = useForm<PhoneDetailFormValuesTypes>({
    resolver: zodResolver(phoneDetailSchema),
    mode: 'onChange',
    defaultValues: {
      color: defaultColor.name,
      storage: defaultStorage,
    },
  });

  const watchedStorage = watch('storage');
  const watchedColor = watch('color');
  const hasChanged =
    watchedColor !== defaultColor.name ||
    watchedStorage.capacity !== defaultStorage.capacity;

  const isFormTouched = touchedColor && touchedStorage;

  const onSubmit = (data: PhoneDetailFormValuesTypes) => {
    console.log('new-phone:', data);

    const imageColorSelected =
      phone.colorOptions.find((color) => color.name === data.color)?.imageUrl ??
      phone.colorOptions[0].imageUrl;
    const phoneCart = {
      id: phone.id,
      name: phone.name,
      imageUrl: imageColorSelected,
      color: data.color,
      storage: data.storage.capacity, // Pass the full storage object
      price: data.storage.price,
    };
    addToCart(phoneCart);
    navigate('/cart');
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="zara-challenge-card-detail-phone"
    >
      <div className="zara-challenge-card-detail-phone__image">
        <img
          src={
            phone.colorOptions.find((c) => c.name === watchedColor)?.imageUrl ??
            selectedColor.imageUrl
          }
          alt={watchedColor}
        />
      </div>

      <div className="zara-challenge-card-detail-phone__info">
        <div className="zara-challenge-card-detail-phone__info-brand">
          <h2 className="zara-challenge-card-detail-phone__info-brand-title">
            {phone.name.toLocaleUpperCase()}
          </h2>
          <span>
            {hasChanged
              ? `${watchedStorage?.price} ${CURRENCIES.EUR}`
              : `From ${watchedStorage.price} ${CURRENCIES.EUR}`}
          </span>
        </div>

        <div className="zara-challenge-card-detail-phone__info-details">
          <div className="zara-challenge-card-detail-phone__info-details-coverage">
            <span>{DETAIL_PHONE.question_coverage.toUpperCase()}</span>
            <div className="zara-challenge-card-detail-phone__info-details-coverage-button">
              <Controller
                control={control}
                name="storage"
                render={({ field: { onChange, value } }) => (
                  <>
                    {phone.storageOptions.map((option) => (
                      <button
                        key={option.capacity}
                        type="button"
                        className={
                          touchedStorage && value?.capacity === option.capacity
                            ? 'selected'
                            : ''
                        }
                        onClick={() => {
                          onChange(option);
                          setTouchedStorage(true);
                        }}
                      >
                        {option.capacity}
                      </button>
                    ))}
                  </>
                )}
              />
            </div>
          </div>
          <div className="zara-challenge-card-detail-phone__info-details-colorOptions">
            <span>{DETAIL_PHONE.question_color.toUpperCase()}</span>
            <div className="zara-challenge-card-detail-phone__info-details-colorOptions-buttons">
              <Controller
                control={control}
                name="color"
                render={({ field: { onChange, value } }) => (
                  <>
                    {phone.colorOptions.map((color) => (
                      <button
                        key={color.name}
                        type="button"
                        onClick={() => {
                          setSelectedColor(color);
                          onChange(color.name);
                          setTouchedColor(true);
                        }}
                        style={{ backgroundColor: color.hexCode }}
                        className={
                          touchedColor && value === color.name ? 'selected' : ''
                        }
                      />
                    ))}
                  </>
                )}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={!isFormTouched}
          className="zara-challenge-card-detail-phone__info__button"
        >
          {DETAIL_PHONE.add.toLocaleUpperCase()}
        </button>
      </div>
    </form>
  );
};

export default CardFormDetailPhone;
