import { BrowserRouter as Router } from 'react-router-dom';
import { render, type RenderOptions } from '@testing-library/react';

import type { ReactElement, ReactNode } from 'react';
import { PhonesProvider } from '../../context/AppContext/app-context';
import { CartProvider } from '../../context/cartContext/cart-context';

const renderWithProviders = (ui: ReactElement, options?: RenderOptions) => {
  const Providers = ({ children }: { children: ReactNode }) => {
    return (
      <Router>
        <PhonesProvider>
          <CartProvider>{children}</CartProvider>
        </PhonesProvider>
      </Router>
    );
  };

  return render(ui, { wrapper: Providers, ...options });
};

export default renderWithProviders;
