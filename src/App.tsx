import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';
import routes from './config/routes';
import { useRoutes } from 'react-router-dom';

export const AppRouter = () => useRoutes(routes);
const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
