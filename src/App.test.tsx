// src/App.test.tsx
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// Buat instance QueryClient khusus testing agar tidak menyimpan cache/retry
const createTestQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

test('renders App component without crashing', async () => {
  const queryClient = createTestQueryClient();

  render(
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MemoryRouter>
          <App />
        </MemoryRouter>
      </QueryClientProvider>
    </Provider>
  );

  // Tunggu hingga efek async/suspense selesai diproses
  await waitFor(() => {
    expect(document.body).toBeInTheDocument();
  });
});