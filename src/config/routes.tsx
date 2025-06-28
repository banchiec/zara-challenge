import { lazy } from 'react';
import MainLayout from '../components/layout';
import { ROUTES } from '../constants';

const ListPhotosPage = lazy(() => import('../pages/list-photos-page'));
const DetailPhotoPage = lazy(() => import('../pages/detail-photo-page'));
const NotFoundPage = lazy(() => import('../pages/not-found-page'));

const routes = [
  {
    path: ROUTES.HOME,
    element: <MainLayout />,
    children: [
      { index: true, element: <ListPhotosPage /> },
      { path: '/phone/:id', element: <DetailPhotoPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
