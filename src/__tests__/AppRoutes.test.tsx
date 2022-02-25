import { Suspense } from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import TestRouter from 'components/Routes';

// test utils file
const renderWithRouter = (ui: any, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);

  return render(ui, { wrapper: BrowserRouter });
};

describe('app router navigating', () => {
  it('should render the home page', async () => {
    renderWithRouter(
      <Suspense fallback="test loading">
        <TestRouter />
      </Suspense>
    );
    const element = await screen.findByText(/Hi/i);
    expect(element).toBeInTheDocument();
  });

  it('should render the about page', async () => {
    renderWithRouter(
      <Suspense fallback="test loading">
        <TestRouter />
      </Suspense>,
      { route: '/about' }
    );

    const element = await screen.findByText(/Hi/i);
    expect(element).toBeInTheDocument();
  });

  it('should show No match component for route not defined', async () => {
    renderWithRouter(
      <Suspense fallback="test loading">
        <TestRouter />
      </Suspense>,
      { route: '/something-that-does-not-match' }
    );

    const element = await screen.findByText(/404/i);
    expect(element).toBeInTheDocument();
  });
});
