import { BrowserRouter } from 'react-router-dom';
import routes from './config/routes';
import { useRoutes } from 'react-router-dom';
import { PhonesProvider } from './context/AppContext/app-context';
import { CartProvider } from './context/cartContext/cart-context';

export const AppRouter = () => useRoutes(routes);
const App = () => {
  return (
    <CartProvider>
      <BrowserRouter>
        <PhonesProvider>
          <AppRouter />
        </PhonesProvider>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
