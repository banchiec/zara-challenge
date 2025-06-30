import { lazy } from 'react';
import MainLayout from '../components/layout';
import { ROUTES } from '../constants';
import CartPhotoPage from '../pages/cart-phone-page';

const ListPhotosPage = lazy(() => import('../pages/list-phones-page'));
const DetailPhotoPage = lazy(() => import('../pages/detail-phone-page'));
const NotFoundPage = lazy(() => import('../pages/not-found-page'));

const routes = [
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <ListPhotosPage /> },
      { path: '/phone/:id', element: <DetailPhotoPage /> },
      { path: `${ROUTES.CART}`, element: <CartPhotoPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
