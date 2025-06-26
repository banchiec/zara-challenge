import { BrowserRouter } from 'react-router-dom';
import routes from './config/routes';
import { useRoutes } from 'react-router-dom';
import { PhonesProvider } from './context/AppContext/app-context';

export const AppRouter = () => useRoutes(routes);
const App = () => {
  return (
    <BrowserRouter>
      <PhonesProvider>
        <AppRouter />
      </PhonesProvider>
    </BrowserRouter>
  );
};

export default App;
