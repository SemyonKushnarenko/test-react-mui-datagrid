import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary, type FallbackProps } from "react-error-boundary";

const queryClient = new QueryClient();

function fallbackRender({ error }: FallbackProps) {
  return (
      <div role="alert">
          <p>Something went wrong:</p>
          <pre style={{ color: "red" }}>{error.message}</pre>
      </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallbackRender={fallbackRender}>      
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ErrorBoundary>
  </React.StrictMode>,
);
