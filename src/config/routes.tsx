import { lazy } from 'react';
import MainLayout from '../components/layout';

const ListPhotosPage = lazy(() => import('../pages/list-photos-page'));
const NotFoundPage = lazy(() => import('../pages/not-found-page'));

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <ListPhotosPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
];

export default routes;
